import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { borderColor } from "@mui/system";
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
const AddNewResources = (props)=>{

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [text, setText] = useState("");


const nameHandler= (event)=> {
    setName(event.target.value);
}
const ageHandler= (event)=> {
    setAge(event.target.value);
}
const textHandler= (event)=> {
    setText(event.target.value);
}

const submitHandler= (event)=> {
    event.preventDefault()
    const resourceData = {
        name:name,
        age:age,
        text:text,
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
          <TextField onChange={nameHandler} value={name} id="outlined-basic" label="Name" variant="outlined" type="text" />
          <TextField onChange={ageHandler} value={age} label="Age" variant="filled"  id="outlined-number" type="number"/>
          <TextareaAutosize onChange={textHandler} value={text}
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: "100%", height:"200px",resize:"none",borderRadius:"5px",
            borderColor:"#ccc",outline:"none", padding:"10px" }}
            />
            <Button type="submit" variant="contained">Add Resources</Button>
        </Box>
      );

}

export default AddNewResources;