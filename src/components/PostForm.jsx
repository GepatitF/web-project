import React, { useState } from "react"

import SenButton from "./button/SenButton"
import SenInput from "./input/SenInput"

const PostForm = ({create}) => {

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now() 
    }
    create(newPost)
    setPost({title: '', body: ''})
  };

  return (

  <form>
    <SenInput
      value={post.title}
      onChange={(e) => setPost({ ...post, title: e.target.value })}
      type="text"
      placeholder="Post Name"
    />
    <SenInput
      value={post.body}
      onChange={(e) => setPost({ ...post, body: e.target.value })}
      type="text"
      placeholder="Post Text"
    />
    <SenButton onClick={addNewPost}>Create new post</SenButton>
  </form>
  )

}

export default PostForm;