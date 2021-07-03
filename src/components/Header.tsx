import { VFC } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIos, Menu, PhoneOutlined } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from '../stores';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  const title = useSelector((state) => state.talk.name);

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar variant="dense">
        <IconButton edge="start" className={classes.menuButton} color="inherit">
          <ArrowBackIos />
        </IconButton>
        <Typography variant="body1" className={classes.title}>
          {title}
        </Typography>
        <IconButton color="inherit">
          <PhoneOutlined />
        </IconButton>
        <IconButton color="inherit">
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
