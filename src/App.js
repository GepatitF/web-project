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

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="container">
      <form>
        <SenInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post Name"
        />
        <SenInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
