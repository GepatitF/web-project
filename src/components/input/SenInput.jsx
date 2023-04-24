import React from "react"

const SenInput = React.forwardRef((props, ref) => {

  return (
    <input ref={ref} {...props} />
  )
})

export default SenInput