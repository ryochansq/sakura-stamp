import { VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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

const Chat: VFC = () => {
  const classes = useStyles();
  const messages = useSelector((state) => state.talk.messages);

  return (
    <div className={classes.root}>
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
