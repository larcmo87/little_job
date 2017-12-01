import React, { Component } from "react";
import { Redirect } from 'react-router';
import "./NavCSS.css";
import {getNavType,getNavPath,getActive,setActive,getLogOffOnText} from "../../NavNavigation.js"

import Search from "../../Pages/Search";


class Nav extends Component {
	

	//CLEAR ALL OF THE LOCAL STORAGE VALUE WHEN LOGGING OFF
	handleLogOff = () =>{
		localStorage.setItem('Id', "");
		localStorage.setItem('loginData', "");
		localStorage.setItem('myData', "");
		localStorage.setItem('searchLocation', "");
		localStorage.setItem('userId', "");
		localStorage.setItem('userType', "");
		
		//SET THE LOGGIN (HOME) LINK TO ACTIVE
		setActive("login");
	};

	render() {		
	 	return(		 
			 <div className="topnav" id="myTopnav">
			 <div className="row">
				<div className="col-sm-4 col-md-4 col-lg-4">
				   <a href="/login" className={(getActive() === "login") ? "active" : ""}>Home</a>
				  <a href="/search" className={(getActive() === "search") ? "active" : ""}>Search</a>
				  <a href="/about" className={(getActive() === "about") ? "active" : ""}>About</a>
				  <a href={getNavPath()} className={(getActive() === "dashboard") ? "active" : ""}>{getNavType()}</a>
			  	</div>
			  	<div className="col-sm-4 col-md-4 col-lg-4 span-col">
			  		<span id="descpt-span">Auto Mechaic Freelance Site</span>
			  	</div>
				<div className="col-sm-4 col-md-4 col-lg-4">
			  		<a href="/login" id="logout" onClick={this.handleLogOff}>{getLogOffOnText()}</a>   
			  	</div>
			  </div>
			</div>
		)
	}
};

export default Nav;


 

