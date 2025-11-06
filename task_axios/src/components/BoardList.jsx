import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useBoardStore } from '../store/boardStore'

function BoardList() {

  // store에서 필요한 상태/함수만 가져오기
  const { posts, searchQuery, currentPage, loadPosts, setSearchQuery, setCurrentPage } = useBoardStore()

  const postsPerPage = 5

  // 컴포넌트가 처음 켜질 때 서버에서 게시글목록 가져오기
  useEffect(()=>{
    loadPosts()
  },[])

  // 검색 처리
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // pagination 계산
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="container mt-5">
      <h2>Board List (Zustand 적용)</h2>

      {/* 검색창 - store의 searchQuery 수정 */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
      />

      {/* 게시글 목록 */}
      <ul className="list-group mb-3">
        {currentPosts.map(post => (
          <li key={post.id} className="list-group-item">
            <Link to={`/board/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      {/* 페이지네이션 */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
            <li key={i+1} className="page-item">
              <button className="page-link" onClick={()=> setCurrentPage(i+1)}>
                {i+1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default BoardList
