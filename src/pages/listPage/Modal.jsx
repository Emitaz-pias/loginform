import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({open,handleClose,text,contentText}) {
  

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{fontSize:'0.9em'}} id="alert-dialog-title">
          {text }
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{color:'red',fontSize:'0.8em'}}>
          {contentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK 
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}