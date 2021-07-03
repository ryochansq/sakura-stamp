import { VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Message } from '../stores/talk';

const useStyles = makeStyles(() =>
  createStyles({
    grid: {
      padding: 4,
    },
  })
);

type Props = {
  message: Message;
};

const MessageView: VFC<Props> = ({ message }: Props) => {
  const classes = useStyles();

  if (message.side === 'left')
    return (
      <Grid container justify="center">
        <Typography variant="body1">
          {message.text} {message.id}
        </Typography>
      </Grid>
    );

  return (
    <Grid item container justify="flex-end" xs={12} className={classes.grid}>
      <img width="40%" src={`stamps/${message.text}.png`} alt={message.text} />
    </Grid>
  );
};

export default MessageView;
