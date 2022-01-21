import React from 'react';
import {  Dialog, DialogActions, DialogTitle, Button} from '@mui/material';

export default function Confirm(props) {
    const {open, title, onClose, onConfirm} = props;
  return <div>
      <Dialog
      open={open}
      onClose={() => onClose()}>

    <DialogTitle >
      
                {title ||'  Tem certeza que deseja excluir?'  }
  
    </DialogTitle>


    <DialogActions className="justify-content-center mb-2">
             <Button onClick={() => onClose()}>
                    Fechar.

             </Button>

             <Button 
             
             onClick={() => {
                onClose()
                onConfirm()}}

                variant="contained"
                color="primary">
                    Confirmar.
            
            </Button>



    </DialogActions>


      </Dialog>


  </div>;
}
