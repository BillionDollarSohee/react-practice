import React from 'react';

const Child = ({ name }) => {
  console.log('Child Rendered');

  return (
    <div>
      <p>name: {name}</p>
    </div>
  );
};

// name 을 메모에 넣고 그 값이 변경되면 렌더링 하겠다.
// 'hikari'로 초기화한 props를 검사하고 변경된게 없으면 리렌더링 하지 않음
export default React.memo(Child);