import React from "react";
import FormCSS from "./form.css"

export const FormLabel = props =>
  <label {...props} className="form-label">{props.text}</label>;	    
