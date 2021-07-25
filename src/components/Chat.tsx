import { VFC, useEffect, useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import smoothscroll from 'smoothscroll-polyfill';
import { useSelector } from '../stores';
import MessageView from './MessageView';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'scroll',
      backgroundImage: 'url(line_background.jpg)',
      backgroundSize: 'cover',
    },
    today: {
      backgroundColor: '#516787',
      color: 'white',
      borderRadius: 16,
      margin: '8px 0',
      padding: '4px 12px',
    },
  })
);

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
smoothscroll.polyfill();

const Chat: VFC = () => {
  const classes = useStyles();
  const messages = useSelector((state) => state.talk.messages);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const view = ref.current;
    if (view) view.scrollTo({ top: view.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={classes.root} ref={ref}>
      <Grid container justify="center">
        <Typography className={classes.today} variant="caption">
          今日
        </Typography>
      </Grid>
      {messages.map((message) => (
        <MessageView message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Chat;
