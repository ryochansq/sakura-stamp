import { VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Message } from '../stores/talk';

const useStyles = makeStyles(() =>
  createStyles({
    timeWrapper: {
      marginBottom: 4,
    },
    time: {
      color: '#345',
      marginTop: -4,
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
      xs={2}
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
  // const classes = useStyles();

  if (message.side === 'left')
    return (
      <Grid container justify="center">
        <Typography variant="body1">
          {message.text} {message.id}
        </Typography>
      </Grid>
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
