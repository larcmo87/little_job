import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const PanelBody = props => 
  <div className = "panel-body">
      {props.children}
  </div>; 	