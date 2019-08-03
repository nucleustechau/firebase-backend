import React from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  formFields: {
    margin: "12px 0"
  }
};

const LoginForm = ({ classes }) => { 
  const variant = "outlined";

  return (
    <div>
      <Typography>Login Form</Typography>
      <form>
        <TextField
          variant={variant}
          label="User Name"
          fullWidth
          className={classes.formFields}
        />
        <TextField
          variant={variant}
          label="Password"
          type="password"
          fullWidth
          className={classes.formFields}
        />
        <Button variant="contianed" onClick={() => alert("clicked")} fullWidth>
          LOGIN
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(LoginForm);
