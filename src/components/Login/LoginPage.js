import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import AuthProvider from "./ProvideAuth";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  alert: {
    position: "absolute",
    top: "10px",
  },
  form: {
    width: "400px",
    height: "450px",
    backgroundColor: "#eeeeee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formTitle: {
    display: "inline-block",
    marginBottom: "15px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    padding: "5px",
  },
  formInput: {
    marginBottom: "10px",
  },
  formButton: {
    marginTop: "10px",
    height: "45px",
  },
}));

function LoginPage() {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();
  let auth = AuthProvider.useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    // TODO: replace below code for real auth.
    // Eg: take from input box and send to backend, if backend return true -> history replace
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div className={classes.container}>
      {from.pathname.length > 0 && (
        <Alert severity="error" className={classes.alert}>
          You must log in to view the page at {from.pathname}
        </Alert>
      )}
      <Paper elevation={2} className={classes.form}>
        <form className={classes.formContainer}>
          <Typography
            variant="h5"
            components="h5"
            className={classes.formTitle}
          >
            Welcome, Traffic Controller 🧰
          </Typography>
          <TextField
            id="outlined-helperText"
            label="Username"
            type="text"
            variant="outlined"
            className={classes.formInput}
          />
          <TextField
            id="outlined-helperText"
            label="Password"
            type="password"
            variant="outlined"
            className={classes.formInput}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.formButton}
            onClick={login}
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default LoginPage;
