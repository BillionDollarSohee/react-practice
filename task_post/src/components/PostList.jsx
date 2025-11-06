import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePostStore } from "../store/usePostStore";

export default function PostList() {

  const posts = usePostStore(state => state.posts);
  const loadPosts = usePostStore(state => state.loadPosts);
  const totalPages = usePostStore(state => state.totalPages);

  useEffect(() => {
    loadPosts(0);     // 첫 페이지 로딩
  }, []);

  return (
    <div className="container mt-5">

      <h2>Post List</h2>
      <Link to="/posts/create" className="btn btn-primary mb-3">글 작성하기</Link>

      <ul className="list-group mb-3">
        {posts.map(post => (
          <li key={post.id} className="list-group-item d-flex justify-content-between">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      {/* pagination */}
      <div className="d-flex gap-2">
        {Array.from({length: totalPages}).map((_, idx) => (
          <button
            key={idx}
            className="btn btn-outline-secondary"
            onClick={() => loadPosts(idx)}
          >
            {idx+1}
          </button>
        ))}
      </div>

    </div>
  );
}
