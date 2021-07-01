import { VFC } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIos, Menu, PhoneOutlined } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    bar: {
      backgroundColor: '#234',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 700,
    },
  })
);

const Header: VFC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <ArrowBackIos />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            八木美樹
          </Typography>
          <IconButton color="inherit">
            <PhoneOutlined />
          </IconButton>
          <IconButton color="inherit">
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
