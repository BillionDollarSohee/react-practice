import { create } from 'zustand'
import { getBoardList, getBoardDetail, deletePost } from '../service/boardService'

export const useBoardStore = create((set) => ({

  posts: [],
  searchQuery: '',
  currentPage: 1,

  // 상세페이지용 선택한 post 저장
  post: null,

  // 목록 가져오기
  loadPosts: async () => {
    const result = await getBoardList()
    set({ posts: result })
  },

  // 상세 가져오기
  loadPostDetail: async (id) => {
    const result = await getBoardDetail(id)
    set({ post: result })
  },

  // 삭제 처리
  removePost: async (id) => {
    await deletePost(id)
    // 삭제했으면 post 초기화
    set({ post: null })
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentPage: (page) => set({ currentPage: page }),
}))
