import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useBoardStore } from '../store/boardStore'

function BoardDetail() {

  const { id } = useParams()
  const navigate = useNavigate()

  // store 에서 post (선택된 글) 과 loadPostDetail 함수를 가져온다
  const { post, loadPostDetail, removePost } = useBoardStore()

  // 컴포넌트 처음 켜질 때 / id 바뀔 때 마다 상세 데이터 조회
  useEffect(()=>{
    loadPostDetail(id)
  }, [id])

  // 삭제 버튼
  const handleDelete = async () => {
    await removePost(id)
    alert('Post deleted successfully')
    navigate('/board')
  }

  // post가 아직 없는 경우 로딩 표시
  if(!post) return <div>Loading...</div>

  return (
    <div className="container mt-5">
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link to={`/board/edit/${post.id}`} className="btn btn-primary">Edit</Link>
      <button onClick={handleDelete} className="btn btn-danger ml-2">Delete</button>
      <Link to="/board" className="btn btn-secondary ml-2">Back to List</Link>
    </div>
  )
}

export default BoardDetail
