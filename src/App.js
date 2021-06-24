import "./App.css";
import UserProfile from "./components/UserProfile/UserProfile";
import TrafficController from "./components/TrafficController/TrafficController";
import React from "react";
import AuthProvider from "./components/Login/ProvideAuth.js";
import AuthButton from "./components/Login/AuthButton";
import LoginPage from "./components/Login/LoginPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <AuthProvider.ProvideAuth className="App">
      <Router>
        <div>
          <AuthButton />
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>

            <AuthProvider.PrivateRoute exact path="/">
              <UserProfile />
            </AuthProvider.PrivateRoute>
            <AuthProvider.PrivateRoute exact path="/profile">
              <UserProfile />
            </AuthProvider.PrivateRoute>
            <AuthProvider.PrivateRoute path="/home/device/:deviceId">
              <TrafficController />
            </AuthProvider.PrivateRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider.ProvideAuth>
  );
}

export default App;
