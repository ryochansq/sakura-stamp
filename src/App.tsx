import { VFC } from 'react';
import { Container, Paper } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Chat from './components/Chat';
import Stamp from './components/Stamp';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      flexGrow: 1,
      padding: 0,
      userSelect: 'none',
    },
    paper: {
      height: '100vh',
      '@supports (-webkit-touch-callout: none)': {
        height: '-webkit-fill-available',
      },
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

const App: VFC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper} elevation={2}>
        <Header />
        <Chat />
        <Stamp />
      </Paper>
    </Container>
  );
};

export default App;
