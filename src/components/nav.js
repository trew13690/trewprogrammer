import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default function Nav() {
  return (
      <div>
          <AppBar 
          position="fixed"
          color="default">
              <Toolbar> <img src="../src/assets/triskele24.png" style={{ marginRight: '1rem'}}/>
              <Grid justify="space-between" container >
                  <Typography
                  variant="h6"
                  color="inherit">
                      Alexandre Trew
                  </Typography>
                 
                      <Grid item>
                      <Button color="inherit">About</Button>
                      <Button color="inherit">Contact</Button>
                  </Grid>
                  </Grid>
              </Toolbar>
          </AppBar>
      </div>
  )
}; 