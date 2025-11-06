import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardList from "./components/BoardList.jsx";
import BoardDetail from "./components/BoardDetail.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:id" element={<BoardDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*
비동기 처리 연습 프로젝트

npm create vite@latest 프로젝트 설치
npm install react-router-dom 라우터 설치
npm install zustand 상태관리 라이브러리 설치
npm install axios 비동기 설치
npm install bootstrap 부트스트랩 설치
*/