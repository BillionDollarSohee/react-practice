import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BoardList() {
  const [boards, setBoards] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const size = 10;

  // 마운트 한번, page가 바뀔 때마다 랜더링
  useEffect(() => {
    axios.get(`http://192.168.2.24:8090/boards?page=${page}&size=${size}`)
      .then((res) => {
        setBoards(res.data.data);
        setTotal(res.data.total);
      });
  }, [page]);

  const totalPages = Math.ceil(total / size);

  return (
    <div className="container py-5">

      <div className="mb-4">
        <h1 className="fw-bold text-center">게시판 목록</h1>
        <p className="text-center text-secondary">React + Spring Boot 실습 과제</p>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">

          <table className="table table-hover align-middle text-center w-100">
            <thead className="table-light">
              <tr>
                <th>ID</th><th>제목</th><th>작성자</th><th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {boards.map((b) => (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td className="fw-semibold">{b.title}</td>
                  <td>{b.writer}</td>
                  <td>{new Date(b.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <li key={i}
                  className={`page-item ${page === i + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => setPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </div>
  );
}

export default BoardList;
