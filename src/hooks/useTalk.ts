import { useEffect, useRef } from 'react';
import { Stamps } from '../data';
import { useDispatch, useSelector } from '../stores';
import {
  appendMessage,
  changeUnit,
  increment,
  Message,
  Scenario,
} from '../stores/talk';

const delay = 1800;

const useStamp = (scenario: Scenario): ((_: Stamps) => void) => {
  const dispatch = useDispatch();
  const unitKey = useSelector((state) => state.talk.currentUnit);
  const index = useSelector((state) => state.talk.index);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const unit = scenario.units[unitKey];

  // 一定間隔で左側のメッセージを追加していくためのuseEffect
  useEffect(() => {
    const nextMessage = unit.states[index];
    if (nextMessage.side === 'input' || nextMessage.side === 'end') return;
    timeoutRef.current = setTimeout(() => {
      dispatch(appendMessage(nextMessage));
      dispatch(increment());
    }, delay);
  }, [dispatch, index, unit, scenario]);

  const onClickStamp = (stamp: Stamps) => {
    const newMessage: Message = {
      side: 'right',
      name: '',
      isStamp: true,
      text: stamp,
    };
    dispatch(appendMessage(newMessage));

    const pointed = unit.states[index];
    if (pointed.side === 'input') {
      const nextUnit = pointed.root[stamp] ?? pointed.root.other;
      if (nextUnit) dispatch(changeUnit(nextUnit));
    } else if (index > 0 && timeoutRef.current) {
      const nextUnit = unit.interrupted;
      if (!nextUnit) return;
      clearTimeout(timeoutRef.current);
      dispatch(changeUnit(nextUnit));
    }
  };

  return onClickStamp;
};

export default useStamp;
