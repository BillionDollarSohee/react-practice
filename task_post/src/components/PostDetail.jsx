import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { usePostStore } from "../store/usePostStore.jsx";

export default function PostDetail() {

  const { id } = useParams();
  const post = usePostStore(state => state.post);
  const loadPost = usePostStore(state => state.loadPost);

  useEffect(() => {
    loadPost(id);
  }, [id]);

  if (!post) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h3>게시글 상세</h3>

      <div className="mb-3">
        <label className="form-label fw-bold">제목</label>
        <div className="form-control">{post.title}</div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">내용</label>
        <div className="form-control" style={{minHeight: "150px"}}>{post.content}</div>
      </div>

      <div className="mt-4 d-flex gap-2">

        <Link className="btn btn-secondary" to="/posts">목록</Link>
        <Link className="btn btn-warning" to={`/posts/${id}/edit`}>수정</Link>
        <Link className="btn btn-danger" to={`/posts/${id}/delete`}>삭제</Link>
        
      </div>
    </div>
  )
}
