import { useMemo, useState } from "react";
import "./App.css";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import PostModal from "./components/modal/PostModal";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "ff", body: "bDescription" },
    { id: 2, title: "aa 2", body: "gDescription" },
    { id: 3, title: "gg 3", body: "sDescription" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="container">
      <PostModal>
        <PostForm create={createPost} />
      </PostModal>
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="JavaScript posts list"
      />
    </div>
  );
}

export default App;
