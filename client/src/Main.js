import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Pages/Login";




const Main = () =>

  <Router>
    <div>     
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} /> 
       
      </Switch>
    </div>
  </Router>;

export default Main;