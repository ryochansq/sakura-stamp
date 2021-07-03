import { useEffect } from 'react';
import { scenarios } from '../data';
import { useDispatch, useSelector } from '../stores';
import { talkSlice } from '../stores/talk';

const useGame = (): void => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.talk.currentUnit);
  const index = useSelector((state) => state.talk.index);
  const messages = useSelector((state) => state.talk.messages);

  useEffect(() => {
    const effect = async () => {
      await new Promise((res) => setTimeout(res, 2000));
      const message = scenarios[0][unit][index];
      if (message.side === 'input') return;
      dispatch(talkSlice.actions.appendMessage(message));
      dispatch(talkSlice.actions.increment());
    };
    void effect();
  }, [dispatch, index, unit]);

  useEffect(() => {
    if (messages.length === 0) return;
    const lastMessage = messages.slice(-1)[0];
    if (lastMessage.side === 'left') return;
    const pointed = scenarios[0][unit][index];
    if (pointed.side !== 'input') return; // これは割り込みの場合。
    // TODO: 割り込まれた場合の処理を書きたい

    const nextUnit = pointed.root[lastMessage.text] || pointed.root.other;
    if (nextUnit) dispatch(talkSlice.actions.changeUnit(nextUnit));
  }, [dispatch, messages, unit, index]);
};

export default useGame;
