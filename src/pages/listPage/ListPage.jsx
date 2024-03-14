import { Box, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import './ListPage.css'
import rpic from '../../assets/rpic.png'
import Modal from './Modal'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PublicIcon from '@mui/icons-material/Public';
const ListPage = () => {
  const [select, setSelect] = useState("FR");
  const onSelect = (code) => setSelect(code);
  const [open, setOpen] = useState(true);
  const [text,setText]=useState('')
  const [contentText,setContentText] = useState('')
  const handleClickOpen = (text,contentText) => {
    setText(text)
    setContentText(contentText)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ pading: '1.5em 2em', height: '115vh', backgroundColor: "#d8dce3" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box><a href="/">Page Principal</a></Box>
        <Box>
          <Box >
            <Grid container justifyContent={'flex-end'} spacing={1}>
              <Grid>
                <ReactFlagsSelect
                  sx={{ backgroundColor: "black" }}
                  selected={select}
                  onSelect={onSelect}
                  countries={["GB", "FR", "ES", "RU", "TR", "CN"]}
                  customLabels={{ GB: "EN-GB", FR: "FR", ES: "ES", RU: "RU", TR: "TR", CN: "CN" }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Box>
      <Box> 
        <Grid container justifyContent={'center'}>
        <Box >
          <Grid xs={12} sm={6} md={3} lg={3}><Box onClick={()=>handleClickOpen('No Recipient Numbers Added Yet')} className='box'> <Typography>LIST OF PAYMENT QUERIES AGENT</Typography><Typography><PublicIcon className='dollar-sign' /></Typography></Box></Grid>
          <Grid xs={12} sm={6} md={3} lg={3}><Box onClick={()=>handleClickOpen('No Transiction Found Yet')} className='box'><Typography>PAYMENT QUERIES PROCESSING</Typography><Typography ><AttachMoneyIcon className='dollar-sign' /></Typography></Box>   </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}><Box onClick={()=>handleClickOpen('No Deposit Request Found Yet')} className='box'><Typography>DEMANDES DE RETRAIT</Typography><Typography ><AttachMoneyIcon className='dollar-sign' /></Typography></Box> </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}><Box onClick={()=>handleClickOpen('No Withdrawal Request Found Yet')} className='box'><Typography>PENDING WITHDRAWAL REQUESTS</Typography><Typography ><AttachMoneyIcon className='dollar-sign' /></Typography></Box>
          </Grid>
        </Box>
      </Grid>
        <Grid container justifyContent={'center'} >
          <img style={{ height: '4em', width: '8em', }} src={rpic} alt="something" />
        </Grid>

        <Grid container justifyContent={'center'}>
          <Box onClick={()=>handleClickOpen('Make Your Payment And Our Team Will Set Up Your New Account Bot For Intregration With The Reddy App',`Don't Make Your Payment Without Contacting Our Retail Team`)}  sx={{ backgroundColor: "#16acbd", color: 'white', textAlign: 'center', width: '13em', padding: '0.5em 1em', borderRadius: '0.2rem', fontWeight: "bold" }} >
            CONNECT TO REDDY
          </Box>
        </Grid>
      </Box>
      (<Modal text={text} contentText={contentText} open={open} handleClose={handleClose} ></Modal>)
    </Box>
  );
};

export default ListPage;