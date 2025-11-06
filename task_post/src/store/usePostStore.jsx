import { create } from "zustand";
import { postService } from "../service/postService.jsx";

export const usePostStore = create((set) => ({

  posts: [],
  post: null,
  totalPages: 0,

  // 리스트 조회
  loadPosts: async (page=0) => {
    const data = await postService.fetchPosts(page);
    set({ posts: data.content, totalPages: data.totalPages });
  },

  // 상세 조회
  loadPost: async (id) => {
    const data = await postService.fetchPost(id);
    set({ post: data });
  },

  // 생성
  createPost: async (newPost) => {
    const data = await postService.createPost(newPost);
    return data;
  },

  // 수정
  updatePost: async (id, updatedPost) => {
    const data = await postService.updatePost(id, updatedPost);
    return data;
  },

  // 삭제
  deletePost: async (id) => {
    await postService.deletePost(id);
    set((state) => ({
      // 현재 posts가 content array니까 여기서도 바로 id 비교 가능
      posts: state.posts.filter((p) => p.id !== id)
    }));
  },

}));
