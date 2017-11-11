import React from "react";

export const Submit = props =>
  <button {...props} type="submit" className="btn btn-info btn-sm">
    {props.text}
  </button>;