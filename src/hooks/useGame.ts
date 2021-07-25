import { useEffect } from 'react';
import { scenarios, Stamps } from '../data';
import { useDispatch } from '../stores';
import { initScenario } from '../stores/talk';
import useTalk from './useTalk';

// const delay = 1800;

const useGame = (): ((_: Stamps) => void) => {
  const dispatch = useDispatch();
  // const unit = useSelector((state) => state.talk.currentUnit);
  // const index = useSelector((state) => state.talk.index);
  // const timeoutRef = useRef<NodeJS.Timeout>();

  // 一定間隔で左側のメッセージを追加していくためのuseEffect
  // useEffect(() => {
  //   const nextMessage = scenario.units[unit][index];
  //   if (nextMessage.side === 'input') return;
  //   timeoutRef.current = setTimeout(() => {
  //     dispatch(appendMessage(nextMessage));
  //     dispatch(increment());
  //   }, delay);
  // }, [dispatch, index, unit, scenario]);

  useEffect(() => {
    dispatch(initScenario(scenarios[0].name));
  }, [dispatch]);
  return useTalk(scenarios[0]);
};

export default useGame;
