import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostPage";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/posts/:id" element={<PostIdPage />} />
        <Route path="/about" element={<About />} />
        <Route  path="/posts" element={<Posts />} />
      </Routes>
  )
}

export default AppRouter;