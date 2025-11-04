import './App.css'
import { useState, useRef } from 'react';

function App() {
  // useState : 값 바뀌면 렌더링
  const [count, setCount] = useState(0);

  // 지역변수 : 렌더링 안일어남
  let localCount = 0;

  // useRef : 렌더링 안일어남 (객체.current 에 저장)
  const countRef = useRef(0);

  const inputRef = useRef(null);

  console.log("App 렌더링");

  const increaseCount = () => {
    setCount(count + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("countRef:", countRef.current);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div>
        <div>state count: {count}</div>
        <button onClick={increaseCount}>state 증가</button>
      </div>

      <hr />

      <div>localCount(지역변수): {localCount}</div>
      {/* 이건 화면에서 값 변하는 걸 확인할 방법이 없다 */}

      <hr />

      <div>
        <div>ref count: {countRef.current}</div>
        <button onClick={increaseRef}>ref 증가</button>
      </div>

      <hr />

      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>focus</button>
    </>
  );
}

export default App;
