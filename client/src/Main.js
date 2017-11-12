import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Pages/Login";
import Type from "./Pages/Type";
import Mechanic from "./Pages/Mechanic";




const Main = () =>

  <Router>
    <div>     
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} /> 
         <Route exact path="/type" component={Type} /> 
         <Route exact path="/mechanic" component={Mechanic} /> 
      </Switch>
    </div>
  </Router>;

export default Main;