import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {

  // 객체 배열 데이터 만들기
  const userList = [
    { id: 1, name: "김소희", email: "kim@naver.com" },
    { id: 2, name: "이왕수", email: "lee@naver.com" },
    { id: 3, name: "박수민", email: "park@naver.com" },
  ];

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {
          userList.map(user => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default UserList;