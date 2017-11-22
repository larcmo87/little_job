import React, { Component } from "react";
import "./NavCSS.css";
import {  BrowserRouter as Router, Route, Switch, Link, findDOMNode  } from "react-router-dom";

class NavBar extends Component {
	render() {
		return (
		<div className="topnav" id="myTopnav">
		  <a href="/login" class="active">Home</a>
		  <a href="/search">Search</a>
		  <a href="/about">About</a>
		  <a href="javascript:void(0);" className="icon" onClick="myFunction()">&#9776;</a>
		</div>
		)
	}
};

  export default NavBar;

