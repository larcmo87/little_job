import React from "react";
import CSS from "./JumbotronCSS.css";
import NAV from "../Nav/NavBar"

 const Jumbotron = () =>
  <div style={{ height: 300 }} className="jumbotron">
    <h1>little <br/><span id='litte-job'> job</span></h1>
    
   	<NAV />
   
  </div>;

export default Jumbotron;