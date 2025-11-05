import React from 'react'
import { useTodoStore } from '../store/todoStore'

const Todolist = () => {
  const todolist = useTodoStore((state)=>state.todolist);
  const removeTodo = useTodoStore((state)=>state.removeTodo);

  return (
    <ul>
      {todolist.map((todo)=>(
        <li key={todo.id}>
          {todo.text}
          <button onClick={()=>removeTodo(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
