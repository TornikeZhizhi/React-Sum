import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import StoredResource from "./StoredResources";
import AddNewResources from "./AddNewResources";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ResourcesMain = (props) => {

    const [resourceData, setResourceData] = useState([])


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    //resources Handlers
    
    const resourceAddHandler= (data)=> {
        setResourceData([...resourceData,data])
    }

    const resourceDeleteHandler= (id)=> {

        const deletedData = resourceData.filter(item=>item.id !== id)

        setResourceData(deletedData)
    }
  
    return (
        <Container p={10}>
            <Typography variant="h3" m={3} style={{textAlign:"center"}}>Resources</Typography>
            <Box sx={{ flexGrow: 1,borderRadius:"5px" }}>
                <Grid container spacing={1}>
                    <Box sx={{ width: '60%', margin:"0 auto" }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Stored Resources" {...a11yProps(0)} />
                            <Tab label="Add New Resources" {...a11yProps(1)} />
                        </Tabs>
                        </Box>
                            {value == 0 && <StoredResource resourceData={resourceData} resourceDeleteHandler={resourceDeleteHandler}></StoredResource>}
                            {value == 1 &&  <AddNewResources resourceAddHandler={resourceAddHandler}></AddNewResources>}
                    </Box>
                </Grid>
            </Box>
            <Box mb={20}></Box>
        </Container> 
    );

}


export default ResourcesMain;