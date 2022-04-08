import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ProductList from "./ProductList";



const Products = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            // console.log(response.data)
            setPosts(response.data.slice(0,15))
            setIsLoading(false)
        })

    },[])

    return (
        <>
    { isLoading ? 
        <Box sx={{ display: 'flex' , justifyContent:'center',marginTop:"10%"}}>
            <CircularProgress />
        </Box>
        :
        <Container p={10}>
            <Typography variant="h3" m={3} style={{textAlign:"center"}}>Products List</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <ProductList posts={posts}></ProductList>
                </Grid>
            </Box>
            <Box mb={20}></Box>
        </Container> }
        </>
    )
}


export default Products;