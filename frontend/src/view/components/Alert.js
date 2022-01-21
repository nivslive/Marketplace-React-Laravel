import React from 'react';
import { changeAlert }  from '../../store/actions/alert.action'
import { Modal, Typography } from '@mui/material'  
import { useDispatch, useSelector } from 'react-redux'
import { MdError, MdCheckCircle } from 'react-icons/md'



export default function Alert() {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alertReducer)
  return (  
  <div>
<Modal
    open={alert.open}
    onClose={() => dispatch( changeAlert({open:false}))}
    className="d-flex flex-column align-items-center justify-content-center h-100"
>

    <div className="bg-white rounded-lg d-flex align-items-center p-4">
       
       
       {(alert.class === 'success') && <MdCheckCircle style={{fontSize: '2.5rem'}} className="mr-3 text-success" />}
       {(alert.class === 'error') && <MdError style={{fontSize: '2.5rem'}} className="mr-3 text-danger" />}
        <Typography 
        className="font-weight-bold"
        variant="subtitle2">
            {alert.msg}



        </Typography>



    </div>


</Modal>

  </div>
  )}
