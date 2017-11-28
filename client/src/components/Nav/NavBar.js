import React, { Component } from "react";
import "./NavCSS.css";
import {getNavType} from "../../NavNavigation.js"

 
class Nav extends Component {

state = {
	type: ""
}

componentDidMount() {
	// this.setState({
	// 	type: NAVIGATION.getNavType()
	// });

	console.log("nave " + JSON.stringify(getNavType()));
}
render() {
 return(
 <div className="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">{getNavType()}</a>
 
</div>
)
}
};

export default Nav;


 

