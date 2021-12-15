import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {add,incrementCart,cartState,remove, decrementCart} from '../../../redux/cartSlice'
import { Box, ButtonGroup } from '@mui/material';

export default function Product({product}) {
  const dispatch = useDispatch()
  const cart = useSelector(cartState)
  const cartIds = cart.map(item => item.id)

  const addProductToCart = (data) =>{
    // console.log("add to cart",data)
    dispatch(add(data))
  }

  const removeProductFromCart = (data) =>{
    dispatch(remove(data))
  }
  

  // console.log("cart",cart.filter(item =>  item.id == product.id)[0].quantity)


  return (
    <Card sx={{ maxWidth: "80%",margin:"10%" ,marginTop:"0", textAlign:'left', minHeight:"350px"}}>
      <CardMedia
        component="img"
        height="140"
        image={product.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography className='singleLineOverflow' gutterBottom variant="h5" component="div">
          {product.Title}
        </Typography>
        <Typography className="threeLineOverflow" variant="body2" color="text.secondary">
         {product.Description}
        </Typography>
        <Typography  sx={{mt:1}} className="threeLineOverflow" variant="body2" color="text.secondary">
         Price : <strong> $ {product.price}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        {cartIds.includes(product.id) ? 
         <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
        <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={() =>dispatch(decrementCart(product)) }>-</Button>
        <Button>{cart.filter(item =>  item.id == product.id)[0].quantity}</Button>
       <Button  onClick={() =>dispatch(incrementCart(product)) }>+</Button>
       </ButtonGroup>
       </Box>:
        <Button variant='outlined' sx={{width:"100%"}} onClick={() =>{
          if(cartIds.includes(product.id)){
            removeProductFromCart(product)
          }else{
            addProductToCart(product)
          }
        }} sx={{display:'flex',alignItems:'center', textAlign:'center',width:"100%"}} size="small">
            <Typography variant='p' component={"div"}>
                   {cart.includes(product) ? "Remove From Cart":" Add To Cart"}
            </Typography>
        </Button>
        

}
      </CardActions>
    </Card>
  );
}


const styles = styled