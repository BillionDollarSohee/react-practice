import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import UserList from "./components/UserList"
import User from "./components/User";


function App() {

  // 동적 라우팅 : localhost:5173/user/1 -> useParams() -> { userId: 1 }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App