import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../api/auth';

const UserInfo = () => {

  const [userInfo, setUserInfo] = useState(null);
  const [error, serError] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo();
        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
        setError('토큰이 없거나 만료되거나 권한이 없습니다.');
      }
    }
  },[]); // 마운트 되었을 때 1번만 실행

  return (
    <div>
      
    </div>
  );
};

export default UserInfo;