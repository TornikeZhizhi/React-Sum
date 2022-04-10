import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from "./Resources.module.css";
const StoredResource = (props)=>{



const deleteId = (id)=>{
    // console.log(data)
    props.resourceDeleteHandler(id)
}

    
    return (
        <>
        {props.resourceData.map( (data)=>(
            <Card sx={{ minWidth: 275 }} m={2} className={classes.relative} key={data.id}>
                <CardContent>

                <Typography variant="h5" component="div">
                     სახელი - {data.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    ასაკი - {data.age}
                    </Typography>
                  
                
                    <Typography variant="body2">
                     ინფორმაცია - {data.text}
                    
                    </Typography>

                </CardContent>
                    <Button onClick={deleteId.bind(this,data.id)}  className={classes.delete} variant="contained" color="error">
                        Delete
                    </Button>
                <Box mb={2}></Box>
                </Card>
    
        ))}
        </>
    )

}

export default StoredResource;