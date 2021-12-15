import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup, Container, Grid } from '@mui/material';
import {response} from '../../config/data.json'
import { useDispatch, useSelector } from 'react-redux';
import { cartState, decrementCart, incrementCart, remove } from '../../redux/cartSlice';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const cart = useSelector(cartState)
  const dispatch = useDispatch()

  const removeFromCart = (data) =>{
    dispatch(remove(data))
  }
  return (
      <Container>

    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row,i) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell align="right">{row.Title}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <ButtonGroup size="small" aria-label="small outlined button group">
                <Button onClick={() => dispatch(decrementCart(row))}>-</Button>
                <Button>{row.quantity}</Button>
              <Button onClick={() => dispatch(incrementCart(row))}>+</Button>
              </ButtonGroup>
              </TableCell>
              <TableCell align="right">$ {row.quantity * row.price}</TableCell>
               <TableCell align="right">
                 <Button onClick={() => removeFromCart(row)} size="small" variant="outlined" color="error">
  Remove
</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <Grid sx={{mt:3}} container>
        <Grid item xs={6}></Grid>
        <Grid textAlign={"right"} item xs={6}>
              <Button  size="small" variant="outlined" color="error">
   Total : $ {cart.reduce((acc,cur) =>{
      return acc+(Number(cur.price)* Number(cur.quantity)) 
   },0)}  
</Button>
        </Grid>
         <Grid item xs={6}></Grid>
        <Grid sx={{mt:1}} textAlign={"right"} item xs={6}>
              <Button  size="small" variant="outlined" color="error">
  Proceed to Checkout
</Button>
        </Grid>
    </Grid>
    
      </Container>
  );
}
