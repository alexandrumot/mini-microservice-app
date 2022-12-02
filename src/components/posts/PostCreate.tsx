import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    await axios.post("http://localhost:3001/posts", {
      title, content
    });

    setTitle("");
    setContent("");
  };

  // const onPostSubmit = async (e: React.KeyboardEvent) => {
  //   if (e.metaKey && e.key === "Enter") {
  //     console.log("SUBMITTED!")
  //   }
  // }

  return (
    <div className="m-4">
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label>Title</label>
          <input 
            value={title}  
            onChange={e => setTitle(e.target.value)} 
            className="form-control w-25" 
            maxLength={30} 
            minLength={2}/>
          <label>Content</label>
          <textarea 
            value={content} 
            onChange={e => setContent(e.target.value)} 
            className="form-control" 
            rows={5} 
            // onKeyDown={onPostSubmit} 
            maxLength={2000}            
            minLength={2}>
          </textarea>
        </div>
        <button id="submit-post-btn" className="btn btn-primary">Post</button>
      </form>
    </div>
  )
};

export default PostCreate;