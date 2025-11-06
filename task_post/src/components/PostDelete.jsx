import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { usePostStore } from "../store/usePostStore.jsx";

export default function PostDelete() {

  const { id } = useParams();
  const navigate = useNavigate();

  const post = usePostStore(state => state.post);
  const loadPost = usePostStore(state => state.loadPost);
  const deletePost = usePostStore(state => state.deletePost);

  useEffect(() => {
    loadPost(id);               // 삭제 페이지 들어오면 해당 글 정보 먼저 불러오기
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);       // 삭제 수행
    navigate("/posts");         // 삭제 후 목록으로
  };

  if(!post) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h3>게시글 삭제</h3>

      <div className="alert alert-danger mt-4">
        <strong>{post.title}</strong> 글을 정말 삭제하시겠습니까?
      </div>

      <div className="mt-4 d-flex gap-2">
        <button className="btn btn-danger" onClick={handleDelete}>삭제</button>
        <Link className="btn btn-secondary" to={`/posts/${id}`}>취소</Link>
      </div>
    </div>
  );
}
