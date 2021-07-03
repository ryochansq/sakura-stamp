import { VFC } from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Message } from '../stores/talk';

const useStyles = makeStyles(() =>
  createStyles({
    timeWrapper: {
      marginLeft: 4,
    },
    time: {
      color: '#345',
      marginTop: -4,
    },
    leftRoot: {
      display: 'flex',
      padding: 4,
    },
    avatar: {
      width: 32,
      height: 32,
    },
    triangle: {
      width: 0,
      height: 0,
      margin: '3px 0 0 -6px',
      border: '8px solid transparent',
      borderRight: '18px solid #edf1ee',
      '-webkit-transform': 'rotate(35deg)',
      transform: 'rotate(35deg)',
    },
    text: {
      backgroundColor: '#edf1ee',
      borderRadius: 12,
      padding: 8,
      margin: '4px 0 0 -9px',
    },
  })
);

type Props = {
  message: Message;
};

const TimeView: VFC<Props> = ({ message }: Props) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="column"
      justify="flex-end"
      alignItems="flex-end"
      className={classes.timeWrapper}
      xs={1}
    >
      {message.side === 'right' && (
        <Typography variant="caption" className={classes.time}>
          既読
        </Typography>
      )}
      <Typography variant="caption" className={classes.time}>
        {message.time}
      </Typography>
    </Grid>
  );
};

const MessageView: VFC<Props> = ({ message }: Props) => {
  const classes = useStyles();

  if (message.side === 'left')
    return (
      <div className={classes.leftRoot}>
        <Avatar
          alt={message.name}
          src={`members/${message.name}.jpg`}
          className={classes.avatar}
        />
        <div className={classes.triangle} />
        <Typography variant="body1" className={classes.text}>
          {message.text}
        </Typography>
        <TimeView message={message} />
      </div>
    );

  return (
    <Grid
      item
      container
      direction="row"
      justify="flex-end"
      alignItems="flex-end"
      spacing={1}
      xs={12}
    >
      <TimeView message={message} />
      <Grid item xs={5}>
        <img
          width="100%"
          src={`stamps/${message.text}.png`}
          alt={message.text}
        />
      </Grid>
    </Grid>
  );
};

export default MessageView;
