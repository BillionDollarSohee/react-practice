import React, {useState} from 'react';

const TodoForm = ({addTodo}) => {
  // 함수 안에 지역변수 -> 재호출시 초기화
  // let data = 0;

  //함수가 호출될때마다 지역변수 초기화 > 왜 호출 > 리엑트 함수형 컴포넌트(UI) > 그림(UI) > 데이터 변화 > 화면를 다시 그린다 > 함수호출
  //함수가 재호출 되더라도 그 값을 유지 >> hook >> useState (재랜더링이 되도 값을 유지)
  //재랜더링의 시점 : useState 값의 변화마다 ... (가상돔 성능 문제 ... 전체 랜더링이 아니면 부분 랜더링 )

  const [input,setInput] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault(); // 서버 전송 동작 방지
    if (input.trim() != '') {
      console.log(input);
      // 부모 컴포넌트로부터 받은 함수를 호출하여 새로운 할 일을 추가
      // App.jsx 부모로 부터 > addTodo 함수 호출
      addTodo(input);
      setInput(''); // state 값 초기화
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type ="text"
          value={input}
          placeholder='Enter new todo'
          onChange={(e) => setInput(e.target.value)} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default TodoForm;