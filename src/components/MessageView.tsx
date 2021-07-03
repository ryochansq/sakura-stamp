import { VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Message } from '../stores/talk';

const useStyles = makeStyles(() =>
  createStyles({
    today: {
      backgroundColor: 'white',
      borderRadius: 16,
      margin: '8px 0',
      padding: '4px 12px',
    },
  })
);

type Props = {
  message: Message;
};

const MessageView: VFC<Props> = ({ message }: Props) => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Typography className={classes.today} variant="caption">
        {message.text} {message.id}
      </Typography>
    </Grid>
  );
};

export default MessageView;
