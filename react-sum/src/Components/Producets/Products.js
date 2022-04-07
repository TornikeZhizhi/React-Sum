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
// import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
                    {posts.map((data)=>(
                            <Grid item xs={6} key={data.id}>
                               <Item>
                                   <Typography variant="h5" color="#000" m={2}>
                                         {data.title}
                                   </Typography>
                                     <Divider></Divider>
                                   <Typography variant="h6" p={2}>
                                     {data.body.split(' ').splice(0,7).join(' ') + "..."}
                                   </Typography>

                                    <Button variant="contained"
                                     component={Link}
                                     to={`/products/${data.id}`}
                                     href="#contained-buttons">
                                        Read More...</Button>
                               </Item>
                            </Grid>
                    ))}
                </Grid>
            </Box>
        </Container> }
        </>
    )
}


export default Products;