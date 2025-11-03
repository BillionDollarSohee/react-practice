import './App.css'
import { useState } from 'react';

function App() {
  // 리액트의 이벤트는 뷰 스테이트를 보고자 하는것
  console.log('App 렌더링됨');

  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  let nomalCount = 0; // 지역변수 상태정보 저장 안되므로 useState Hook 사용

  const handleClick = () => {
    nomalCount += 1;
    setCount(count + 1);
    console.log('일반 변수:', nomalCount);
    console.log('state 변수:', count + 1);
  }

  const inputClick = (e) => {
    setText(e.target.value);
  }

  return (
    <div className='App'>
      <p>count : {count}</p>
      <button onClick={handleClick}>+1</button>
      <hr />
      <input type="text" value={text} onChange={inputClick} />
      <p>Enter text : {text}</p>
    </div>
  )
}

export default App
