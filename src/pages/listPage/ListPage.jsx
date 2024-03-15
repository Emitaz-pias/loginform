import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import './ListPage.css'
import rpic from '../../assets/rpic.png'
import Modal from './Modal'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PublicIcon from '@mui/icons-material/Public';
const ListPage = () => {
  const [select, setSelect] = useState("GB");
  const onSelect = (code) => setSelect(code);
  const [open, setOpen] = useState(false);
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
    <Box sx={{ pading: '1.5em 2em', height: '125vh', backgroundColor: "#d8dce3" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box><a href="/">Page Principal</a></Box>
        <Box>
          <Box >
            <Grid container justifyContent={'flex-end'} spacing={1}>
              <Grid>
                <ReactFlagsSelect  
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
      <Box sx={{ color:'#757373',marginLeft:'0.4em',maxWidth:'99vw'}}>Latest reports</Box>
      <Box> 
        <Grid container justifyContent={'center'}>
        <Box >
          <Grid sx={{padding:'0.5em 1.1em'}} xs={11} sm={5} md={3} lg={3}><Box onClick={()=>handleClickOpen('No recipient numbers added yet')} className='box'> <Typography sx={{textAlign:'left',fontWeight:'bold',padding:'0.4em'}}>ACTIVE RECEIPIENT NUMBERS</Typography><Typography><PublicIcon className='dollar-sign' /></Typography></Box></Grid>
          <Grid sx={{padding:'0.5em 1.1em'}} xs={11} sm={5} md={3} lg={3}><Box onClick={()=>handleClickOpen('No deposit request found yet')} className='box'><Typography sx={{textAlign:'left',fontWeight:'bold',padding:'0.4em'}}>TRANSACTION HISTORY</Typography><Typography ><AttachMoneyIcon className='dollar-sign' /></Typography></Box> </Grid>
          <Grid sx={{padding:'0.5em 1.1em'}} xs={11} sm={5} md={3} lg={3}><Box onClick={()=>handleClickOpen('No deposit request found yet')} className='box'><Typography sx={{textAlign:'left',fontWeight:'bold',padding:'0.4em'}}>PENDING DEPOSIT REQUESTS</Typography><Typography ><AttachMoneyIcon className='dollar-sign' /></Typography></Box> </Grid>
          <Grid sx={{padding:'0.5em 1.1em'}} xs={11} sm={5} md={3} lg={3}><Box onClick={()=>handleClickOpen('No withdrawal request found yet')} className='box'><Typography sx={{textAlign:'left',fontWeight:'bold',padding:'0.4em'}}>PENDING WITHDRAWAL REQUESTS</Typography><Typography ><AttachMoneyIcon className='dollar-sign' /></Typography></Box>
          </Grid>
        </Box>
      </Grid>
        <Grid container justifyContent={'center'} >
          <img style={{ height: '4em', width: '8em', }} src={rpic} alt="something" />
        </Grid>

        <Grid container justifyContent={'center'}>
          <Box onClick={()=>handleClickOpen('Make your payment and our team will set up your new account bot for intregration with the Reddy app',` Note:Don't make your payment without contacting our retail team`)}  sx={{ backgroundColor: "#16acbd", color: 'white', textAlign: 'center', width: '13em', padding: '0.5em 1em', borderRadius: '0.2rem', fontWeight: "bold" }} >
            Connect to Reddy
          </Box>
        </Grid>
      </Box>
      <Modal text={text} contentText={contentText} open={open} handleClose={handleClose} ></Modal>
    </Box>
  );
};

export default ListPage;