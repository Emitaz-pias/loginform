import React,{useState} from 'react';
import './LoginPage.css'
import Box from '@mui/material/Box';
import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import ReactFlagsSelect from "react-flags-select";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ListPage from '../listPage/ListPage';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [select, setSelect] = useState("GB");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(email,password);
  const onSelect = (code) => setSelect(code);
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const enteredEmail = formData.get('email');
    const enteredPassword = formData.get('password');
    const isUserValid = users.some(user => user.email === enteredEmail && user.pass === enteredPassword);

    if (isUserValid) {
      setEmail(enteredEmail);
      setPassword(enteredPassword);
      setIsLoggedIn(true);
    } else {
      // Display error message or handle invalid login
      console.log("Invalid login");
    }
    event.target.reset();
  };
  const users =[
    {email:'hulkmain_bkash',pass:'nnjFGV76%'},
    {email:'thor_town',pass:'uuVhrx92@'},
    {email:'landon_cap',pass:'uuVhrx92@'},
    {email:'landon_main',pass:'nnjFGV76%'},
    {email:'hulkmain_nagad',pass:'vvUhrx93@'},
    {email:'thunder_main',pass:'vvUhrx93@'},
    {email:'neon_egypt',pass:'vvUhrx93@'},
    {email:'phoenixLoom',pass:'vvUhrx94@'},
    {email:'flashmain_rocket',pass:'uugWy67@'},
    {email:'dynamoForce',pass:'uugWy67@'},
    {email:'supremeVortex',pass:'uugWy67@'},
    {email:'thunderGaze',pass:'uugWy67@'},
    {email:'polion_egypt',pass:'jkLgWy67@'},
    {email:'polion7_egypt',pass:'jkLgWy67@'},
    {email:'fresco_main',pass:'jkLgWy67@'},
    {email:'polion_main',pass:'jkLgWy67@'},
    {email:'pirus_main',pass:'nuLgWy84@'},
    {email:'alion_main',pass:'nuLgWy84@'},
    {email:'perimain_insta',pass:'nuLgWy84@'},
    {email:'polion_insta',pass:'nuLgWy84@'},
    {email:'pablo_main',pass:'nuLgWy84@'},
    {email:'fresco_voda',pass:'jkLgFHI37@'},
    {email:'fresco_insta',pass:'jkLgFHI37@'},
    {email:'Sphinxion7',pass:'jkLgFHI37@'},
    {email:'GizaGraphix',pass:'jkLgFHI37@'},
    {email:'pablo_egypt',pass:'jkLgFHI37@'},
    {email:'PyramidPeak',pass:'JGiyfxvg56%'},
    {email:'LotusLion_vibe',pass:'JGiyfxvg56%'},
    {email:'PharaohFlick',pass:'JGiyfxvg56%'},
    {email:'DesertDuo_dash',pass:'JGiyfxvg56%'},
    {email:'CairoCode_craze',pass:'JGiyfxvg56%'},
    {email:'lotus_voda',pass:'JGiyfxvg56%'},
    {email:'lotus_insta',pass:'JGiyfxvg56%'},








  ]
  return (
    <Box>
      {isLoggedIn ? (
        <ListPage />
      ) : (
        <div className='body loginwrapper'>
          {/* Login form */}
          <div className='login-overlay' />
          <div className='login_form'>
            <div className="lang">
              {/* Language selector */}
              <Grid container justifyContent={'flex-end'} spacing={1}>
                <Grid>
                  <ReactFlagsSelect
                  className=''
                    selected={select}
                    onSelect={onSelect}
                    countries={["GB", "FR", "ES", "RU", "TR", "CN"]}
                    customLabels={{ GB: "EN-GB", FR: "FR", ES: "ES", RU: "RU", TR: "TR", CN: "CN" }}
                  />
                </Grid>
              </Grid>
              <div className="heading">
                <div className="heading__image"></div>
              </div>
            </div>
            <div className="formBody">
              {/* Login form */}
              <Box component="form" padding={'0px 10px'} onSubmit={handleSubmit}>
                <TextField
                size='small'
                  sx={{
                    backgroundColor: 'white',
                     borderRadius: '0.3em',
                       '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        border: 'none',
                      },
                      '&:hover fieldset': {
                        border: 'none', // Remove the outline on hover
                      },
                      '& input::placeholder': {
                        fontSize: '14px',
                        fontWeight:'500' // Adjust the font size as needed
                      },
                    }
                  }}
                  InputProps={{ startAdornment: (<InputAdornment><PersonIcon fontSize='small' /></InputAdornment>) }}
                  required
                  fullWidth
                  placeholder=" Введите логин"
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  size='small'
                  sx={{
                    backgroundColor: 'white',
                    mt:3,
                     borderRadius: '0.3em',
                     '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        border: 'none',
                      },
                      '&:hover fieldset': {
                        border: 'none', // Remove the outline on hover
                      },
                      '& input::placeholder': {
                        fontSize: '14px',
                        fontWeight:'500' // Adjust the font size as needed
                      },
                    }
                  }}
                  InputProps={{ startAdornment: (<InputAdornment><LockIcon fontSize="small" /></InputAdornment>) }}
                  placeholder=' Введите пароль'
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
                  sx={{ mt: 3, mb: 2, p: 1, fontWeight: 'bold' }}
                >
                  Log In
                </Button>
              </Box>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default LoginPage;
