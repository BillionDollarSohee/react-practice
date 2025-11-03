import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todoList , removeTodo}) => {
  // todolist : ['할일1', '할일2'.. todoItem의 배열 개수 만큼]
  // map(value, index, array)

  return (
    <ul>
      {todoList.map((todo, index) => ( //return 생략
        <TodoItem key={index} todo={todo} index={index} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;