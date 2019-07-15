import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProjectBox from '../components/projectBox';
export default function Projects() {
  
  return (
    <div style={{ marginTop: "15%"  }}>
    
      <Typography 
      style={{marginBottom: '2rem'}} 
       variant="h4">Portfolio</Typography>
      
      <Grid 
      container 
      direction='row'
      justify="center"
      alignItems="center"
      >

      <ProjectBox />
      </Grid>
    </div>
  );
}
