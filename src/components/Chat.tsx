import { VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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

  return (
    <div className={classes.root}>
      <div>start</div>
      <Grid container justify="center">
        <Typography className={classes.today} variant="caption">
          今日
        </Typography>
      </Grid>
      <div>end</div>
    </div>
  );
};

export default Chat;
