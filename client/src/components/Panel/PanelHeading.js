import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const PanelHeading = props => 
   <div className="panel panel-default">
    	<div className = "panel-heading">
		      <h3 className = "panel-title">
		         {props.title}
		      </h3>  
		</div> 			
   </div>; 	
