import React from "react";

import SenButton from "./button/SenButton";

const PostItem = (props) => {
  return (
    <div className="post-container">
      <div className="post-content">
        <h1 className="post-header">{props.number}.{props.post.title}</h1>
        <div className="post-text">{props.post.body}</div>
        <div className="btn-container">
          <SenButton onClick={() => props.remove(props.post)}>Удалить</SenButton>
        </div>
      </div>
    </div>
  )
}

export default PostItem