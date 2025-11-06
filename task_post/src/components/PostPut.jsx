import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePostStore } from "../store/usePostStore.jsx";

export default function PostPut() {

  const { id } = useParams();
  const navigate = useNavigate();

  const post = usePostStore(state => state.post);
  const loadPost = usePostStore(state => state.loadPost);
  const updatePost = usePostStore(state => state.updatePost);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    loadPost(id);
  }, [id]);

  // post 가 로딩되면 input 에 세팅
  useEffect(() => {
    if(post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = { title, content };
    await updatePost(id, updatedPost);

    navigate(`/posts/${id}`);      // 수정 후 상세화면으로 이동
  };

  if(!post) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h3>게시글 수정</h3>

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

        <button className="btn btn-warning mt-3">수정 완료</button>
      </form>
    </div>
  );
}
