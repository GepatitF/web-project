import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/loader/Loader";

const PostIdPage = () => {

  const params = useParams();
  const [post, setPost] = useState({})
  const [fetchingPostsById, isLoading, error] = useFetching( async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
  });
  useEffect( () => {
    fetchingPostsById(params.id)
  }, []);

  return (
    <div>
      <h1>
        Вы на странице поста ID = {params.id}
        {isLoading
          ? <Loader />
          : console.log(post.title)
        }
      </h1>
    </div>
  )
}

export default PostIdPage;