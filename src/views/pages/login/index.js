import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { getUserDetails, userState } from '../../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'



export default function SignIn() {
  const [user,setUser] = React.useState({id:"123456789",password:"123456789"})
  const dispatch = useDispatch()
  const userData = useSelector(userState)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    let userData ={
      user:user
    }
   dispatch(getUserDetails(userData))
  };

  // React.useEffect(() =>{
  //   console.log("useffec",userData)
  //     if(userData.data?._id){
       
  //       navigate("/")
  //     }
  // },[userData.data])

 

  return (
 
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="User Id"
              name="email"
              autoFocus
            
              value={user.id}
              onChange={(e) =>setUser({...user,id:e.target.value}) }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={(e) =>setUser({...user,password:e.target.value}) }
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
      </Container>
 
  );
}