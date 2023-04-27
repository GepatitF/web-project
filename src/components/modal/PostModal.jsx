import React from "react"

import classes from './PostModal.module.css'

const PostModal = ({children}) => {
  <div className={[classes.modal, classes.active].join('')}> 
    <div className={classes.content}>
      {children}
    </div>
  </div>
}

export default PostModal;