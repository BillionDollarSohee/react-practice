import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

  // 동적 라우팅
  // MPA localhost:8090/user/1 -> spring boot -> @PathVariable("id") Long id
  // SPA localhost:3000/user/1 -> react router -> useParams() -> { id: 1 }
  
  // 데이터 보낼때
  // <Link to={`/user/1`}>{user.name}</Link>
  // 데이터 받을때
  // const { id } = useParams();

  const {userId} = useParams();
  const userList = {
    1: { name: "김소희", email: "kim@naver.com"},
    2: { name: "이왕수", email: "lee@naver.com"},
    3: { name: "박수민", email: "park@naver.com"}
  }

  const user = userList[userId]; // users[0], users[1], users[2]
  console.log(user);

  return (
    <div>
      <h3>User Detail</h3>
      {
        user ? (
          <div>
            <h3>{user.name}</h3>
            <p>{user.id}</p>
            <p>{user.email}</p>
          </div>
        ) : (
          <p>존재하지 않는 사용자입니다.</p>
        )
      }
    </div>
  );
};


export default User;