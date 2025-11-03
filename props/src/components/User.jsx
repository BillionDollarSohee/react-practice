import React from 'react';

const User = ({user}) => { //객체 받음
  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      <p>이메일: {user.email}</p> 
    </div>
  );
};

export default User;