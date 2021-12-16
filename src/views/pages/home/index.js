import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Product from '../../components/Products'
import {response} from '../../../config/data.json'

function Home() {
    return (
        <div>
            {/* <Header /> */}
            <Container>
               <Grid container>
                   {response.map((item,i) =>{
                   return <Grid key={i} item md={4}>
                        <Product product={item} />
                   </Grid>
                   })}
               </Grid>
               {/* <Grid container>
                   <Grid item xs={12}>
                       <ProductView />
                   </Grid>
               </Grid> */}
            </Container>
        </div>
    )
}

export default Home
