import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartState } from '../../../redux/cartSlice';
import { signout } from '../../../redux/userSlice';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const cart = useSelector(cartState)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{mb:4}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink style={{textDecoration:"none"}} to="/">

         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color:"#fff" }}
          >
            LOGO
          </Typography>
           </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem  onClick={handleCloseNavMenu}>
                <NavLink  style={{textDecoration:"none"}}  to="/products">  <Typography textAlign="center">Products</Typography></NavLink>
                <NavLink  style={{textDecoration:"none"}} to="/about">  <Typography textAlign="center">About</Typography></NavLink>
                   
                </MenuItem>
           
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             <NavLink  style={{textDecoration:"none"}} to="/">

           
              <Button
             
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Products
              </Button>
              </NavLink>
           <NavLink style={{textDecoration:"none"}} to="/about">

           
              <Button
             
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About
              </Button>
              </NavLink>

              
           
          </Box>

          <Box sx={{ flexGrow: 0,display:'flex',alignItems:'center' }}>
            <NavLink  style={{textDecoration:"none"}} to="/cart">
              <IconButton  onClick={handleCloseNavMenu}
                sx={{  color: 'white', display: 'flex' }} aria-label="Example">
        
     <ShoppingCartIcon >
    
       </ShoppingCartIcon> 
         {cart.length}
</IconButton>
           
              </NavLink>
              <Button
             
                onClick={() => dispatch(signout())}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Signout
              </Button>
             
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
