import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { borderColor } from "@mui/system";
import Button from '@mui/material/Button';
const AddNewResources = ()=>{

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [text, setText] = useState("");

    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" type="text" />
          <TextField label="Age" variant="filled"  id="outlined-number" type="number"/>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: "100%", height:"200px",resize:"none",borderRadius:"5px",
            borderColor:"#ccc",outline:"none", padding:"10px" }}
            />
            <Button variant="contained">Add Resources</Button>
        </Box>
      );

}

export default AddNewResources;