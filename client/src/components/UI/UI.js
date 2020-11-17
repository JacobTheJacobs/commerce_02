import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={2}>
          <Paper className={classes.paper}>Navigation</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={8}>
          <Paper className={classes.paper}>{props.children}</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={2}>
          <Paper className={classes.paper}>Categories</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
