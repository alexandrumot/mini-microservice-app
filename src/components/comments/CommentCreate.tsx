import axios from "axios";
import React, { SyntheticEvent } from "react";
import { useState } from "react";

type CommentProps = {
  postId: string;
};

const CommentCreate = (postId: CommentProps) => {
  const [content, setContent] = useState("");

  const onSubmit = async (e:SyntheticEvent) => {
    e.preventDefault();

    await axios.post(`http://localhost:3001/posts/${postId}/comments`, {
      content
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label>New Comment</label>
          <input className="form-control" 
          value={content}
          onChange={e => setContent(e.target.value)}/>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
};

export default CommentCreate;