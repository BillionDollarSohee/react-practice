import axios from 'axios';
import React from 'react';

// API 통신 담당하는 axios 요청 하는 함수 코드들이 있는 jsx
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// 공통 api executor
async function apiRequest(method, url, data) {
  try {
    const res = await axios({ method, url, data })
    return res.data
  } catch (err) {
    console.error(`[API ERROR] ${method.toUpperCase()} ${url}`, err)
    throw err
  }
}

/*
axios({
  method:'put',
  url:`${API_URL}/${id}`,
  data:updatedPost
})
*/


// 서비스 함수들
export const getBoardList = () => apiRequest('get', API_URL)

export const getBoardDetail = (id) => apiRequest('get', `${API_URL}/${id}`)

export const updatePost = (id, updatedPost) =>
  apiRequest('put', `${API_URL}/${id}`, updatedPost)

export const deletePost = (id) => apiRequest('delete', `${API_URL}/${id}`)


/*
// 게시글 목록 가져오기
export const getBoardList = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data; // API에서 받아온 데이터를 반환
  } catch (error) {
    console.error('Error fetching board list:', error);
    throw error;
  }
};


// 게시글 상세 가져오기
export const getBoardDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching board detail:', error);
    throw error;
  }
};
// 게시글 업데이트
export const updatePost = async (id, updatedPost) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};
// 게시글 삭제
export const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
*/