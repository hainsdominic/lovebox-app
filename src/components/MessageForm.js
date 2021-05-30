import React from 'react';
import useStyles from '../styles';

import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
} from '@material-ui/core';

const MessageForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Typography variant='h1' gutterBottom>
          {'Lovebox <3'}
        </Typography>
        <Typography variant='h5' gutterBottom>
          {'Connect to the lovebox and send a lovely message'}
        </Typography>
        <form className={classes.form} noValidate autoComplete='off'>
          <Grid xs={12}>
            <TextField
              className={classes.formField}
              id='standard-basic'
              label='Lovebox ID'
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              className={classes.formField}
              id='standard-basic'
              label='Password'
              type='password'
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              className={classes.formField}
              id='standard-basic'
              label='Message'
            />
          </Grid>
          <Grid xs={12}>
            <Button
              className={classes.sumbitBtn}
              variant='contained'
              color='secondary'
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default MessageForm;
