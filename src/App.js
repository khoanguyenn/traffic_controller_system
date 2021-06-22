import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import TrafficController from "./components/TrafficController/TrafficController";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={TrafficController}/>
          <Route exact path="/profile" component={UserProfile}/>
          <Route exact path="/login"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
