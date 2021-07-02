import { VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'gray',
    },
  })
);

const Stamp: VFC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Typography variant="caption">スタンプ</Typography>
      </Grid>
    </div>
  );
};

export default Stamp;
