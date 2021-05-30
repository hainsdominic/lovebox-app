import React from 'react';

import { CssBaseline, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MessageForm from './components/MessageForm';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(10),
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
        <Container>
          <Typography variant='h3' gutterBottom>
            {'Lovebox <3'}
          </Typography>
          <Typography variant='h5' gutterBottom>
            {'Connect to the lovebox and send a lovely message'}
          </Typography>
          <MessageForm />
        </Container>
      </div>
    </>
  );
}

export default App;
