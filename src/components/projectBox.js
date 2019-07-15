import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function ProjectBox() {
  return (
    <div>
      <Card
        style={{
          minHeight: "150px",
          padding: "20px",
          minWidth: "500px" , 
          marginTop: '3rem',
        }}
      >
        <CardContent>
          <Typography
            style={{ textAlign: "center", marginBottom: '1rem' }}
            color="textSecondary"
           variant="h5" 
          >
            Ark Tribe Manager
          </Typography>
          <Typography>TODO - Description of project</Typography>
          <img src='#'></img>
        </CardContent>
        <Button variant="contained" component="span" color="primary">
          Code
        </Button>
        <Button style={{float: 'right'}} variant="contained" component="span" color="primary">
          Site
        </Button>
      </Card>
    </div>
  );
}
