import { useEffect, useRef } from 'react';
import { scenarios, Stamps } from '../data';
import { useDispatch, useSelector } from '../stores';
import { appendMessage, changeUnit, increment, Message } from '../stores/talk';

const delay = 1800;

const useGame = (): ((s: Stamps) => void) => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.talk.currentUnit);
  const index = useSelector((state) => state.talk.index);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // 一定間隔で左側のメッセージを追加していくためのuseEffect
  useEffect(() => {
    const nextMessage = scenarios[0].units[unit][index];
    if (nextMessage.side === 'input') return;
    timeoutRef.current = setTimeout(() => {
      dispatch(appendMessage(nextMessage));
      dispatch(increment());
    }, delay);
  }, [dispatch, index, unit]);

  const onClickStamp = (stamp: Stamps) => {
    const newMessage: Message = {
      side: 'right',
      name: '',
      isStamp: true,
      text: stamp,
    };
    dispatch(appendMessage(newMessage));

    const pointed = scenarios[0].units[unit][index];
    if (pointed.side === 'input') {
      const nextUnit = pointed.root[stamp] || pointed.root.other;
      if (nextUnit) dispatch(changeUnit(nextUnit));
    } else if (index > 0 && timeoutRef.current) {
      const nextUnit =
        scenarios[0].interrupted[unit] ?? scenarios[0].interrupted.other;
      if (!nextUnit) return;
      clearTimeout(timeoutRef.current);
      dispatch(changeUnit(nextUnit));
    }
  };

  return onClickStamp;
};

export default useGame;
