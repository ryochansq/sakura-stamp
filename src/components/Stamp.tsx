import { VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { stamps } from '../data/index';
import useGame from '../hooks/useGame';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: '#edf1ee',
    },
    title: {
      backgroundColor: '#234',
      color: 'white',
      padding: 4,
    },
    gridWrapper: {
      padding: '0 16px',
    },
    stampGrid: {
      padding: 8,
    },
    imgWrapper: {
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100%',
    },
    img: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    button: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      color: 'transparent',
      cursor: 'pointer',
      padding: 0,
      borderStyle: 'none',
    },
  })
);

const Stamp: VFC = () => {
  const classes = useStyles();
  const onClickStamp = useGame();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.title}
      >
        <Typography variant="body1">スタンプ</Typography>
        <ArrowDropDown />
      </Grid>
      <div className={classes.gridWrapper}>
        <Grid container direction="row" justify="center">
          {stamps.map((stamp) => (
            <Grid item xs={3} key={stamp}>
              <div className={classes.stampGrid}>
                <div className={classes.imgWrapper}>
                  <img
                    src={`stamps/${stamp}.png`}
                    alt={stamp}
                    className={classes.img}
                  />
                  <button
                    type="button"
                    className={classes.button}
                    onClick={() => onClickStamp(stamp)}
                  >
                    {' '}
                  </button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Stamp;
