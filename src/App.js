import React from 'react';

import { CssBaseline, Container, Typography } from '@material-ui/core';

import useStyles from './styles';

import MessageForm from './components/MessageForm';

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
        <Container>
          <Typography variant='h1' gutterBottom>
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
