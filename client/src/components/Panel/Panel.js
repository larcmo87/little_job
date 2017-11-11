import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const Panel = ({children}) => {
	return (
	    <div className="panel panel-default">
	    	{children}			 
	    </div>
    ); 	
};

