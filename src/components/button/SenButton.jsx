import React from "react";

const SenButton = ({children, ...props}) => {
  
  return (
    <button {...props} >{children}</button>
  )
}

export default SenButton