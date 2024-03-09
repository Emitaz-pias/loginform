import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import './ListPage.css'

const ListPage = () => {
    const [select, setSelect] = useState("FR");
    const onSelect = (code) => setSelect(code);
    return (
        <Box sx={{pading:'3em 3em',height:'110vh',backgroundColor:"#d8dce3"}}>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Box><a href="/">Page Principal</a></Box>
            <Box><Box >
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
          </Box></Box>

            </Box>
           <Box  marginBottom='2em'>
           <Box className='box'> <Typography>LIST OF PAYMENT QUERIES AGENT</Typography><Typography className='dollar-sign'>$</Typography></Box>
           <Box className='box'><Typography>PAYMENT QUERIES PROCESSING</Typography><Typography className='dollar-sign'>$</Typography></Box> 
           <Box className='box'><Typography>DEMANDES DE RETRAIT</Typography><Typography className='dollar-sign'>$</Typography></Box> 
           <Box className='box'><Typography>PENDING WITHDRAWAL REQUESTS</Typography><Typography className='dollar-sign'>$</Typography></Box> 
           </Box>
 
        </Box>
    );
};

export default ListPage;