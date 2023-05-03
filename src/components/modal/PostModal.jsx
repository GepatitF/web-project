import React from "react";

import classes from './PostModal.module.css';

const PostModal = ({children, visible, setVisible}) => {

  const rootClasses = [classes.modal]

  if (visible) {
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}> 
      <div className={classes.content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default PostModal;