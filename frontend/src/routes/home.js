import React from 'react'



import { Loading, Notify, Alert, Confirm } from '../view/components';
import Menu from '../view/layouts/menu/Menu';
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles({
  root: {
    backgroundColor: 'black' ,
    maxWidth: '100%'}
})

export default function App() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
    <Confirm
   open={false}
   onClose={() => alert('close')}
  onConfirm={() => alert('confirm')}

   />
    <Loading/>
    <Notify/>
    <Alert/>
    <Menu/>


    </div>

    </>
  );
}