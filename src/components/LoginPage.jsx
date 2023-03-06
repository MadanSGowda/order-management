import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';
import { login } from '../redux/actions/loginActions'
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  textField: {
    margin: '10px',
    width: '300px',
  },
  button: {
    margin: '10px',
    width: '300px',
  },
});

const LoginPage = (props) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginState = useSelector(state => state.login);
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
    if(loginState.isLoggedIn){
      console.log("Hiiiiiiiiiiiiiii")
      navigate('/orders',{replace: true})
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.textField}
        label="Username/Email"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <TextField
        className={classes.textField}
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <Typography color='error'>{loginState.error}</Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginPage;
