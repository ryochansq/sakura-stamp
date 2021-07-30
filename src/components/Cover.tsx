import { VFC, useRef, CSSProperties } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Transition, TransitionStatus } from 'react-transition-group';
import { useSelector } from '../stores';
import { ENTER_TIMEOUT, ENTER_DELAY, EXIT_TIMEOUT } from '../data';

const useStyles = makeStyles(() =>
  createStyles({
    cover: {
      backgroundColor: 'white',
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      top: 0,
      zIndex: 9999,
    },
  })
);

const transitionStyle: { [key in TransitionStatus]?: CSSProperties } = {
  entering: {
    transition: `all ${ENTER_TIMEOUT}ms ease`,
    transitionDelay: `${ENTER_DELAY}ms`,
    opacity: 0,
  },
  entered: {
    transition: `all ${ENTER_TIMEOUT}ms ease`,
    transitionDelay: `${ENTER_DELAY}ms`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${EXIT_TIMEOUT}ms ease`,
    opacity: 1,
  },
  exited: {
    transition: `all ${EXIT_TIMEOUT}ms ease`,
    opacity: 0,
    zIndex: -100,
  },
};

const Cover: VFC = () => {
  const classes = useStyles();
  const changing = useSelector((state) => state.talk.changing);
  const nodeRef = useRef(null);

  return (
    <Transition in={changing} timeout={0} nodeRef={nodeRef}>
      {(state) => (
        <div
          className={classes.cover}
          style={transitionStyle[state]}
          ref={nodeRef}
        />
      )}
    </Transition>
  );
};

export default Cover;
