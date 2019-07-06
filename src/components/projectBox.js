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
          marginLeft: "15px",
          minWidth: "500px"
        }}
      >
        <CardContent>
          <Typography
            style={{ textAlign: "center", marginBottom: '2rem' }}
            color="textSecondary"
            gutterBottom
          >
            Ark Tribe Manager
          </Typography>
          <Typography>TODO - Description of project</Typography>
        </CardContent>
        <Button variant="outlined" component="span">
          Code
        </Button>
        <Button style={{float: 'right'}} variant="outlined" component="span">
          Site
        </Button>
      </Card>
    </div>
  );
}
