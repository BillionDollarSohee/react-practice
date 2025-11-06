import axios from "axios";

const SERVER_URL = 'http://localhost:8090/posts';

async function apiRequest(method, url, data) {
  const res = await axios({ method, url, data });
  return res.data;
}

export const getPosts = (page=0, size=5) =>
  apiRequest('get', `${SERVER_URL}?page=${page}&size=${size}`);

export const getPost = (id) => apiRequest('get', `${SERVER_URL}/${id}`);
export const createPost = (newPost) => apiRequest('post', SERVER_URL, newPost);
export const updatePost = (id, updatedPost) => apiRequest('put', `${SERVER_URL}/${id}`, updatedPost);
export const deletePost = (id) => apiRequest('delete', `${SERVER_URL}/${id}`);
