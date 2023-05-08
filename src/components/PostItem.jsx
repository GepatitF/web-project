import React from "react";
import { useNavigate } from "react-router-dom"

import SenButton from "./button/SenButton";

const PostItem = (props) => {
 
    const navigate = useNavigate();
    const router = () => {
      navigate(`${props.post.id}`)
    }

  return (
    <div className="post-container">
      <div className="post-content">
        <h1 className="post-header">{props.post.id}.{props.post.title}</h1>
        <div className="post-text">{props.post.body}</div>
        <div className="btn-container">
        <SenButton onClick={router}>Открыть</SenButton>
          <SenButton onClick={() => props.remove(props.post)}>Удалить</SenButton>
        </div>
      </div>
    </div>
  )
}

export default PostItem