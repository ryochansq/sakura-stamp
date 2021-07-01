import { VFC } from 'react';
import { Container, Paper } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: 0,
    },
    paper: {
      height: '100vh',
      backgroundImage: 'url(line_background.jpg)',
      backgroundSize: 'cover',
    },
  })
);

const App: VFC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper} elevation={2}>
        <Header />
        <div>hoge</div>
      </Paper>
    </Container>
  );
};

export default App;
