import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import Type from "./Pages/Type";
import Mechanic from "./Pages/Mechanic";
import MechanicDashboard from "./Pages/Mechanic-Dashboard";
import Poster from "./Pages/Poster";
import PosterDashboard from "./Pages/Poster-Dashboard";
import CreatePost from "./Pages/CreatePost";
import Successful from "./Pages/Successful";
import "./index.css"





const Main = () =>

  <Router>
    <div>     
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} /> 
         <Route exact path="/search" component={Search} /> 
         <Route exact path="/type" component={Type} /> 
         <Route exact path="/mechanic" component={Mechanic} /> 
         <Route exact path="/poster" component={Poster} /> 
         <Route exact path="/mechanic-dashboard" component={MechanicDashboard} /> 
         <Route exact path="/poster-dashboard" component={PosterDashboard} /> 
         <Route exact path="/createpost" component={CreatePost} /> 
         <Route exact path="/successful" component={Successful} /> 
      </Switch>
    </div>
  </Router>;

export default Main;