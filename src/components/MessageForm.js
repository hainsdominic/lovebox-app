import React from 'react';
import sha512 from 'js-sha512';

import { useForm, Controller } from 'react-hook-form';
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
} from '@material-ui/core';

import useStyles from '../styles';
import { db } from '../config/firebase';

const MessageForm = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const onSubmit = async ({ id, password, message }) => {
    try {
      const hash = await (await db.ref(`boxes/${id}/password`).get()).val();
      if (sha512(password) === hash) {
        await db.ref(`boxes/${id}`).update({
          message,
        });
        alert('Message sent successfully!');
        setValue('message', '');
      } else {
        alert('Invalid Credentials');
      }
    } catch (error) {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className={classes.container}>
      <Container>
        <Typography variant='h1' gutterBottom>
          {'Lovebox <3'}
        </Typography>
        <Typography variant='h5' gutterBottom>
          {'Connect to the lovebox and send a lovely message'}
        </Typography>
        <form
          className={classes.form}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item={true} xs={12}>
            <Controller
              name='id'
              control={control}
              defaultValue={''}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  className={classes.formField}
                  label='Lovebox ID'
                  {...field}
                  error={errors.id?.type === 'required'}
                />
              )}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <Controller
              name='password'
              control={control}
              defaultValue={''}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  className={classes.formField}
                  label='Password'
                  type='password'
                  {...field}
                  error={errors.password?.type === 'required'}
                />
              )}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <Controller
              name='message'
              control={control}
              defaultValue={''}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  className={classes.formField}
                  label='Message'
                  {...field}
                  error={errors.message?.type === 'required'}
                />
              )}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <Button
              className={classes.sumbitBtn}
              variant='contained'
              color='secondary'
              type='submit'
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