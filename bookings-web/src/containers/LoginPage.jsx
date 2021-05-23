import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
        flexDirection: 'column',
      },
    },
  }));
  
  const LoginPage = () => {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');



    const handleUsername = (e) => { 
        e.preventDefault();
        console.log(e.target.value);
        setUserName(e);

    }

    const handlePassword = (e) => { 
        e.preventDefault();
        console.log(e.target.value);
        setPassword(e);
    }

    const handleLoginSubmit = (e) => { 
        e.preventDefault();
        console.log('in the button!')
        try { 
            const user = someFunction(userName, password);
            

        } catch(err) { 
            setErrorMessage(err);
        }

    }
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
           <TextField required id="standard-required" label="Required" placeholder="Username" onChange={handleUsername} />
           <TextField required id="standard-required" label="Required" placeholder="Password" onChange={handlePassword} />
           <Button variant="contained" color="secondary" onClick={handleLoginSubmit}>
             Login!
            </Button>
        </div>
      </form>
    );
  }

export default LoginPage;