import { useState } from "react";
import "./App.css";

import PostList from "./components/PostList";
import SenButton from "./components/button/SenButton";
import SenInput from "./components/input/SenInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts(...posts, { ...post, id: Date.now });
    setPost({ title: "", body: "" });
  };

  return (
    <div className="container">
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
      <PostList posts={posts} title="JavaScript posts list" />
    </div>
  );
}

export default App;
