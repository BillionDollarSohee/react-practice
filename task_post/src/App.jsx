import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostCreate from "./components/PostCreate";
import PostPut from "./components/PostPut";
import PostDelete from "./components/PostDelete";
import Navbar from "./components/Navbar.jsx";

function App(){
  return (
    <BrowserRouter>
      <Navbar />      
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/create" element={<PostCreate />} />
        <Route path="/posts/:id/edit" element={<PostPut />} />
        <Route path="/posts/:id/delete" element={<PostDelete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App