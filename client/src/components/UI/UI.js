import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import ResponsiveDrawer from "./SideDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function UI(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResponsiveDrawer />
      <Grid container>
        <Grid item sm={4} md={3} lg={2}></Grid>
        <Grid item sm={8} md={9} lg={10}>
          <Paper className={classes.paper}>{props.children}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
