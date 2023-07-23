import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../sidenav';
// import Typography from '@mui/material/Typography';
import { styled,} from '@mui/material/styles';
import Widget from "../widget/Widget";
import Datatable from "../datatable/Datatable";

const Dashboard = () => {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


  return (
    <>
      <Box sx={{ display: "flex"}}>
        <Sidenav/>
        

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        <div className="widgets" style={{display:"flex", gap:"20px"}} >
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="list" style={{marginTop:"20px",display:"flex",width:"100%"}}>
          <div className='listContainer' style={{flex:"6"}}>
           <Datatable/>
          </div>
          
        </div>
      </Box>

      </Box>
    </>
    
  );
};

export default Dashboard;