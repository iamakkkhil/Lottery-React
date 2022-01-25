import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SavingsIcon from '@mui/icons-material/Savings';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const CustomAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation="0" sx={{ paddingLeft: 25, paddingRight: 25,  verticalAlign: 'middle'}}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 30, verticalAlign: 'middle' }}>
                        <SavingsIcon sx={{ color: 'orange', fontSize: 35, verticalAlign: 'middle'}}/> Ɖ-Pool
                    </Typography>
                    <Box color="inherit" sx={{ paddingLeft: 1.5, paddingTop: 0.5, paddingBottom: 0.5, paddingRight: 2, border: '1px solid grey', borderRadius: 8, verticalAlign: 'middle', color:'grey' }}>
                        <FiberManualRecordIcon sx={{ color: "#4FCE5D", fontSize: 20, verticalAlign: 'middle'}}/> Rinekby Test Network
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default CustomAppBar;