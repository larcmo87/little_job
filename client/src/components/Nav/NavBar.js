import React from "react";
import "./NavCSS.css";
 
 const NavBar = () =>
 <div className="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" className="icon" onClick="myFunction()">&#9776;</a>
</div>;


  export default NavBar;

