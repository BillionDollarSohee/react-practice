import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/posts">게시판</Link>
        
        <div>
          <Link className="btn btn-outline-light" to="/posts/create" >
            글 작성
          </Link>
        </div>
      </div>
    </nav>
  );
}
