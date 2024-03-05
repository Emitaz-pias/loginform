import React,{useState,useRef} from 'react';
import './LoginPage.css'
import Box from '@mui/material/Box';
import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import ReactFlagsSelect from "react-flags-select";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const LoginPage = () => {
  // const [age, setAge] = useState('');
  // const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("");
  const onSelect = (code) => setSelected(code);

  const showSelectedLabel = ( false);
  const showSecondarySelectedLabel = (
 false
  );
  const showOptionLabel = (false);
  const showSecondaryOptionLabel = (true);
  const searchable = ( false);
  const handleSubmit=()=>{}
  return (
    <div className='body loginwrapper'>
      <div className='login-overlay' />
      <div  className='login_form'>
        <div   className="lang">
          <Box >
            
              <ReactFlagsSelect
              placeholder={`${selected}`}
              onSelect={(countryCode)=>onSelect(countryCode)}
              defaultCountry={"GB"}
              showSelectedLabel={showSelectedLabel}
        showSecondarySelectedLabel={showSecondarySelectedLabel}
        showOptionLabel={showOptionLabel}
        showSecondaryOptionLabel={showSecondaryOptionLabel}
              selectedSize={20}
              optionsSize={20}
              fullWidth={true}
              />
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
              placeholder="     Enter username"
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