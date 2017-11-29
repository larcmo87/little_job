import React, { Component } from "react";
import { Redirect } from 'react-router';
import "./NavCSS.css";
import {getNavType,getNavPath,getActive,setActive} from "../../NavNavigation.js"

import Search from "../../Pages/Search";

//GLOBAL VARIABLE TO SET THE LOGOFF/SIGNON LINK TEXT
let signOnText = "Sign On";

class Nav extends Component {

	componentDidUpdate() {

		//IF USER LOGGED IN THEN SET THE LOGOFF/SIGNON LINK TEXT TO "Log Off" 
		//ELSE  SET THE LOGOFF/SIGNON LINK TEXT TO "Sign On" 
		if(localStorage.getItem('Id') !== ""){

			signOnText = "Log Off";
		}else if(localStorage.getItem('Id') === ""){
			signOnText = "Sign On";
		}
	};

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
			  <a href="/login" className={(getActive() === "login") ? "active" : ""}>Home</a>
			  <a href="/search" className={(getActive() === "search") ? "active" : ""}>Search</a>
			  <a href="#contact" className="">About</a>
			  <a href={getNavPath()} className={(getActive() === "dashboard") ? "active" : ""}>{getNavType()}</a>
			  <a href="/login" id="logout" onClick={this.handleLogOff}>{signOnText}</a>  
			</div>
		)
	}
};

export default Nav;


 

