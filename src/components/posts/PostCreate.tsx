import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/posts", {
      title, content
    });

    setTitle("");
  };

  return (
    <div className="m-4">
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label>Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="form-control w-25" maxLength={30}/>
          <label>Content</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" rows={5}></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
};

export default PostCreate;