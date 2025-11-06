import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../store/usePostStore.jsx";

export default function PostCreate() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const createPost = usePostStore(state => state.createPost);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, content };
    await createPost(newPost);

    navigate("/");
  }

  return (
    <div className="container mt-4">
      <h3>글 작성</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>제목</label>
          <input
            className="form-control"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>내용</label>
          <textarea
            className="form-control"
            rows="5"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">등록</button>
      </form>
    </div>
  )
}
