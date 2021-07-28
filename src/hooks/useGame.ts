import { useState, useEffect, useRef } from 'react';
import { scenarios, Stamps } from '../data';
import { useDispatch } from '../stores';
import { initScenario, appendMessage, Message } from '../stores/talk';

const initialPos = {
  scenarioIndex: 0,
  unitKey: 'start',
  stateIndex: 0,
};
const INTERVAL = 1800;
const SUCCESS_UNIT_KEY = 'success';

const useGame = (): ((_: Stamps) => void) => {
  const dispatch = useDispatch();
  const [, setScore] = useState(0);
  const [pos, setPos] = useState(initialPos);
  const scenario = scenarios[pos.scenarioIndex];
  const unit = scenario.units[pos.unitKey];
  const timeoutRef = useRef<NodeJS.Timeout>();

  // ゲーム開始処理
  useEffect(() => {
    dispatch(initScenario(scenarios[0].name));
  }, [dispatch]);

  // 一定間隔で左側のメッセージを追加していくためのuseEffect
  useEffect(() => {
    const nextMessage = unit.states[pos.stateIndex];
    if (nextMessage.side === 'input') return;
    const callback =
      nextMessage.side === 'end'
        ? () => {
            if (pos.scenarioIndex + 1 === scenarios.length) return;
            dispatch(initScenario(scenario.name));
            setPos((prev) => ({
              scenarioIndex: prev.scenarioIndex + 1,
              unitKey: initialPos.unitKey,
              stateIndex: 0,
            }));
          }
        : () => {
            dispatch(appendMessage(nextMessage));
            setPos((prev) => ({ ...prev, stateIndex: prev.stateIndex + 1 }));
          };
    timeoutRef.current = setTimeout(callback, INTERVAL);
  }, [dispatch, pos, unit, scenario]);

  const changeUnit = (nextUnitKey: string) => {
    if (nextUnitKey === SUCCESS_UNIT_KEY) setScore((prev) => prev + 1);
    setPos((prev) => ({ ...prev, unitKey: nextUnitKey, stateIndex: 0 }));
  };

  const onClickStamp = (stamp: Stamps) => {
    const newMessage: Message = {
      side: 'right',
      name: '',
      isStamp: true,
      text: stamp,
    };
    dispatch(appendMessage(newMessage));

    const pointed = unit.states[pos.stateIndex];
    if (pointed.side === 'input') {
      const nextUnitKey = pointed.root[stamp] ?? pointed.defaultRoot;
      if (nextUnitKey) changeUnit(nextUnitKey);
    } else if (pos.stateIndex > 0 && timeoutRef.current) {
      const nextUnitKey = unit.interrupted;
      if (!nextUnitKey) return;
      clearTimeout(timeoutRef.current);
      changeUnit(nextUnitKey);
    }
  };

  return onClickStamp;
};

export default useGame;
