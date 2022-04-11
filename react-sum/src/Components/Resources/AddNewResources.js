import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import ResourceInputHook from "./ResourcesHook/ResourcesInputHook";
const AddNewResources = (props)=>{

    const [name,setName] = ResourceInputHook("");
    const [age, setAge] = ResourceInputHook("");
    const [text, setText] = ResourceInputHook("");



const submitHandler= (event)=> {
  
    event.preventDefault()
    const resourceData = {
        edit:false,
        name:name,
        age:age,
        id:uuidv4()
    }
    props.resourceAddHandler(resourceData)
}


    return (
        <Box onSubmit={submitHandler}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField onChange={setName} value={name} id="outlined-basic" label="Name" variant="outlined" type="text" />
          <TextField onChange={setAge} value={age} label="Age" variant="filled"  id="outlined-number" type="number"/>
            <Button type="submit" variant="contained">Add Resources</Button>
        </Box>
      );

}

export default AddNewResources;