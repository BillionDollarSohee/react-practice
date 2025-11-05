import React, { useState } from 'react';
import { useTodoStore } from '../store/todoStore';

const TodoInput = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state)=>state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim()){
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={text}
        onChange={(e)=> setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInput;



/*
zustand 사용하는 문법은 2가지 방식이 있다.
// counterStore.js
import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

>>>> 전체 구독 버전
import React from "react";
import { useCounterStore } from "./counterStore";

function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div style={{ padding: 20 }}>
      <h2>Count: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;


>>>> 선택 구독 버전 (추천)
const count = useCounterStore((state) => state.count);
const increase = useCounterStore((state) => state.increase);


→ 이렇게 하면 필요한 상태만 리렌더링되어 성능 최적화에 유리합니다.
*/