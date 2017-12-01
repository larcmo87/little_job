import React from "react";
import "./JumbotronCSS.css";
import NAV from "../Nav/NavBar"

 const Jumbotron = () =>
  <div style={{ height: 300 }} className="jumbotron">
    <div>
    	
  		<h1>little <br/><span id='litte-job'> Job</span></h1>
  	</div>
    <NAV />   
  </div>;

export default Jumbotron;