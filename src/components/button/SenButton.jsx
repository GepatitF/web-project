import React from "react";

import classes from './SenButton.module.css'

const SenButton = ({children, ...props}) => {
  
  return (
    <button {...props} >{children}</button>
  )
}

export default SenButton