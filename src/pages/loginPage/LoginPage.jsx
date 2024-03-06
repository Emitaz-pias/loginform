import React,{useState,useRef} from 'react';
import './LoginPage.css'
import Box from '@mui/material/Box';
import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import ReactFlagsSelect from "react-flags-select";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const LoginPage = () => {
  const [email,setEmail]=useState('asdf@gmail.com')
  const [password,setPassword]=useState('asdf')
  const [select, setSelect] = useState("GB");
  const onSelect = (code) => setSelect(code);
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password')
    setEmail(email)
    setPassword(password)
    event.target.reset();
  };
  return (
    <div className='body loginwrapper'>
      <div className='login-overlay' />
      <div  className='login_form'>
        <div   className="lang">
          <Box >
         <Grid container justifyContent={'flex-end'} spacing={1}>
          <Grid>
          <ReactFlagsSelect
         sx={{backgroundColor:"black"}}
        selected={select}
        onSelect={onSelect}
        countries={["GB","FR","ES","RU","TR","CN"]}
        customLabels={{GB: "EN-GB", FR: "FR",ES: "ES",RU:"RU",TR:"TR",CN:"CN" }}
        />
          </Grid>
         </Grid>
          </Box>
          <div className="heading">
            <div className="heading__image"></div>
          </div>
        </div>
        <div className="formBody">
          <Box component="form" fontSize="small" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              sx={{backgroundColor:'white',borderRadius:'0.6em',height:'3.5em','& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none', // Remove the outline on hover
                },
              }}}
              InputProps={{startAdornment:(<InputAdornment><PersonIcon fontSize='medium'/></InputAdornment>)}}
              required
              fullWidth
              placeholder="    Enter username"
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              sx={{backgroundColor:'white',borderRadius:'0.6em',height:'3.5em','& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none', // Remove the outline on hover
                },
              }}}
              InputProps={{startAdornment:(<InputAdornment><LockIcon fontSize="medium"/></InputAdornment>)}}
              placeholder='     Enter password'
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              className='btn-success'
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 ,p:1,fontWeight:'bold'}}
            >
              Log In
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;