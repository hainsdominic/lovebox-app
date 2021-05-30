import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(10),
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
  formPaper: {
    margin: theme.spacing(7, 'auto'),
    padding: theme.spacing(2),
    width: theme.spacing(35),
  },
}));

export default useStyles;
