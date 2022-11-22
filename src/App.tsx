import React from "react";
import PostCreate from "./components/posts/PostCreate";
import PostList from "./components/posts/PostList";


const App = () => {
  return (
    <div className="container">
      <h1 className="">Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;   