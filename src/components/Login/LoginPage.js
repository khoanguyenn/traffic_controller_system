import React from "react";
import {
  useHistory,
  useLocation
} from "react-router-dom";
import AuthProvider from "./ProvideAuth";

function LoginPage() {
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
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default LoginPage;