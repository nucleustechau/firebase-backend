import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import login from "../../services/auth/login";

const styles = {
  formFields: {
    margin: "12px 0",
  },
};

const LoginForm = ({ classes }) => {
  const variant = "outlined";
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  return (
    <div>
      <Typography>Login Form</Typography>
      <form>
        <TextField
          variant={variant}
          label="User Name"
          fullWidth
          className={classes.formFields}
          onChange={e => updateUsername(e.target.value)}
        />
        <TextField
          variant={variant}
          label="Password"
          type="password"
          fullWidth
          className={classes.formFields}
          onChange={e => updatePassword(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => login(username, password)}
          fullWidth
          color="primary"
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(LoginForm);
