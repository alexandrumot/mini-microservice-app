import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentCreate from "../comments/CommentCreate";


const PostList = () => {
  interface IPost {
    [id: string]: IPostData
  }
  interface IPostData {
    id: string;
    title: string;
    content: string;
  }

  const initialPostList: IPost = {
    "1": {
      id: "1",
      title: "First Post",
      content: "Text..."
    }
  };

  const [posts, setPosts] = useState<IPost>(initialPostList);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:3000/posts');

    const posts = res.data

    setPosts(posts)
    
  };

  useEffect(() => {
    fetchPosts();
  });

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div className="card m-4" key={post.id}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <CommentCreate postId={post.id}  />
        </div>
      </div> 
    )
  });

  return (
    <div className="d-block mb-4">
      { renderedPosts }
    </div>
  )
};

export default PostList;