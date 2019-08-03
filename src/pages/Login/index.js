import React from "react";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import LoginForm from "../../components/loginForm";

const styles = theme => ({
  root: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
    top: "20%",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
    },
  },
});
const Login = ({ classes, match }) => {
  return (
    <Paper className={classes.root}>
      <LoginForm />
    </Paper>
  );
};

export default withStyles(styles)(Login);
