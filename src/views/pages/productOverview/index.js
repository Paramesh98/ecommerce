import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';


const dataItem ={
    "Id": "jenlooper-light",
    "Maker": "jenlooper",
    "img": "https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg",
    "Url": "https://www.hackster.io/agent-hawking-1/book-light-dee7e4",
    "Title": "A beautiful light",
    "Description": "Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.",
    "Ratings": null,
    "price":"500"
  }

export default function ProductView() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    
      <Grid container component="main" sx={{ height: "100%",mt:4 }}>
        
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${dataItem.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              textAlign:'left',
              height:"50vh"
            //   display: 'flex',
            //   flexDirection: 'column',
            //   alignItems: 'center',
            }}
          >
            <Typography
            variant="h5"
            component="div"
          >
            {dataItem.Title}
          </Typography>

              <Typography
            variant="p"
            component="div"
            sx={{mt:3}}
          >
            {dataItem.Description}
          </Typography>
               <Typography
            variant="p"
            component="div"
            sx={{mt:3}}
          >
            Maker : {dataItem.Maker}
          </Typography>
            <Typography  sx={{mt:1}} className="threeLineOverflow" variant="body2" color="text.secondary">
         Price : <strong> $ {dataItem.price}</strong>
        </Typography>

        <Button sx={{mt:5, width:"100%"}} variant="outlined">Add To Cart</Button>

          </Box>
        </Grid>
      </Grid>
 
  );
}