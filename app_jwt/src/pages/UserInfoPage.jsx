import React, { useState, useEffect } from 'react';

const UserInfoPage = () => {
  const [header, setHeader] = useState(null);
  const [payload, setPayload] = useState(null);
  const [signature, setSignature] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('로그인 토큰이 없습니다. 로그인 후 다시 시도하세요.');
        return;
      }

      // JWT 세 부분 나누기
      const parts = token.split('.');
      if (parts.length !== 3) {
        setError('잘못된 토큰 형식입니다.');
        return;
      }

      const header = JSON.parse(atob(parts[0]));
      const payload = JSON.parse(atob(parts[1]));
      const signature = parts[2];

      setHeader(header);
      setPayload(payload);
      setSignature(signature);
    } catch (err) {
      console.error('JWT 파싱 오류:', err);
      setError('토큰 정보를 읽을 수 없습니다.');
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>로그인된 사용자 정보</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!error && (
        <>
          <p><strong>Header:</strong></p>
          <pre>{header ? JSON.stringify(header, null, 2) : '로딩 중...'}</pre>

          <p><strong>Payload:</strong></p>
          <pre>{payload ? JSON.stringify(payload, null, 2) : '로딩 중...'}</pre>

          <p><strong>Signature:</strong></p>
          <pre>{signature || '로딩 중...'}</pre>
        </>
      )}
    </div>
  );
};

export default UserInfoPage;
