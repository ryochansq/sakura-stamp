import { useDispatch } from '../stores';
import { talkSlice, Message } from '../stores/talk';
import { Stamps } from '../data/index';

const useStamp = (): ((stamp: Stamps) => void) => {
  const dispatch = useDispatch();
  const onClickStamp = (stamp: Stamps) => {
    const message: Message = {
      side: 'right',
      name: '',
      isStamp: true,
      text: stamp,
    };
    dispatch(talkSlice.actions.appendMessage(message));
  };
  return onClickStamp;
};

export default useStamp;
