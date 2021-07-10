import "./App.css";
import UserProfile from "./components/UserProfile/UserProfile";
import TrafficController from "./components/TrafficController/TrafficController";
import React from "react";
import AuthProvider from "./components/Login/ProvideAuth.js";
import LoginPage from "./components/Login/LoginPage";
import VehicleHistory from "./components/VehicleHistory/VehicleHistory";
import { SocketContext, socket } from "./context/socket";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <AuthProvider.ProvideAuth className="App">
        <Router>
          <div>
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
              <AuthProvider.PrivateRoute path="/device/:deviceId">
                <TrafficController />
              </AuthProvider.PrivateRoute>
              <AuthProvider.PrivateRoute path="/history">
                <VehicleHistory />
              </AuthProvider.PrivateRoute>
            </Switch>
          </div>
        </Router>
      </AuthProvider.ProvideAuth>
    </SocketContext.Provider>
  );
}

export default App;
