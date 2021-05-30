import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(10, 'auto'),
    textAlign: 'center',
  },
  form: {
    margin: theme.spacing(1),
  },
  formField: {
    margin: theme.spacing(1),
  },
  sumbitBtn: {
    margin: theme.spacing(2),
  },
}));

export default useStyles;
