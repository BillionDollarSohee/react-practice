import React, { useState } from 'react';
import { login } from '../api/auth'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await login({ username, password });
      localStorage.setItem('token', response.data); // 서버 토큰 저장
      alert('로그인 성공! 정보 페이지로 이동합니다.');
      navigate('/info'); 
    } catch (error) {
      console.error(error);
      alert('로그인 실패: ' + (error.response?.data?.message || '서버 오류'));
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: '20px' }}>
      <h2>로그인</h2>
      <div>
        <label>ID: </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>PW: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginForm;
