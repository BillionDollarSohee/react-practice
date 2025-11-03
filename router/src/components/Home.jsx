import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>React Router</p>

      <nav style={{ marginTop: '20px' }}>
        <Link to="/userList">유저 목록 보기</Link>
      </nav>
    </div>
  );
};

export default Home;
