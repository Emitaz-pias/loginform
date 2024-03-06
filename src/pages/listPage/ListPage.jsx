import { Box, Typography } from '@mui/material';
import React from 'react';

const ListPage = () => {
    return (
        <Box backgroundColor='red'>
           <Box>
            <Typography>LIST OF PAYMENT QUERIES AGENT</Typography><Typography sx={{fontSize:'30vh',fontWeight:'bold ',marginTop:'10px',padding:'10px'}}>$</Typography></Box>
           <Box><Typography>PAYMENT QUERIES PROCESSING</Typography><Typography sx={{fontSize:'30vh',fontWeight:'bold'}}>$</Typography></Box> 
           <Box><Typography>DEMANDES DE RETRAIT</Typography><Typography sx={{fontSize:'30vh',fontWeight:'bold'}}>$</Typography></Box> 
           <Box><Typography>PENDING WITHDRAWAL REQUESTS</Typography><Typography sx={{fontSize:'30vh',fontWeight:'bold'}}>$</Typography></Box> 
 
        </Box>
    );
};

export default ListPage;