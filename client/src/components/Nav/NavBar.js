import React, { Component } from "react";
import { Redirect } from 'react-router';
import "./NavCSS.css";
import {getNavType,getNavPath,getActive,setActive} from "../../NavNavigation.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "../../Pages/Search";

let navType = "";
class Nav extends Component {

state = {
	signoutlinktext: "Sign On",
	signedIn: false
}

componentDidMount() {
	
	console.log("nave " + JSON.stringify(getNavType()));
	this.handleLogOffSignInLinkText();
};

componentDidUpdate(){
	if(!this.state.signedIn){
		
		this.setState({
			signoutlinktext:"Log Off",
			signedIn: true
		});
	}
};

handleLogOffSignInLinkText = () =>{

	if(localStorage.getItem('Id')){

		this.setState({
			signoutlinktext:"Log Off",
			signedIn: false
		});
	}
};

handleLogOff = () =>{
	localStorage.setItem('Id', "");
	localStorage.setItem('loginData', "");
	localStorage.setItem('myData', "");
	localStorage.setItem('searchLocation', "");
	localStorage.setItem('userId', "");
	localStorage.setItem('userType', "");
	this.setState({
		signoutlinktext: "Sign On",
		 
	});
	setActive("login");
	


};

render() {
	
 return(
 
 <div className="topnav" id="myTopnav">
  <a href="/login" className={(getActive() === "login") ? "active" : ""}>Home</a>
  <a href="/search" className={(getActive() === "search") ? "active" : ""}>Search</a>
  <a href="#contact" className="">About</a>
  <a href={getNavPath()} className={(getActive() === "dashboard") ? "active" : ""}>{getNavType()}</a>
  <a href="/login" id="logout" onClick={this.handleLogOff}>{this.state.signoutlinktext}</a>
  
 
 
  
</div>
	
)
}
};

export default Nav;


 

