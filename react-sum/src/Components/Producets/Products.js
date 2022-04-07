import React, { useEffect, useState } from "react";
import {NavLink,Link } from "react-router-dom";
import axios from "axios";
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { textAlign } from "@mui/system";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ProductList from "../ProductList";
// import Box from '@mui/material/Box';


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
        <Container>
            <Typography variant="h3" m={3} style={{textAlign:"center"}}>Products List</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <ProductList posts={posts}></ProductList>
                </Grid>
            </Box>
        </Container> }
        </>
    )
}


export default Products;