import { useState } from 'react'
import './App.css'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'

function App() {
  const [todoList, setTodoList] = useState([]); // 초기값 빈배열, 리랜더링 되어도 값을 유지

  const addTodo = (todo) => {
    setTodoList([...todoList, todo]); // 기존 배열 복사(spread 연산자)+ 새로운 할일 추가
  }

  const removeTodo = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index); // index가 아닌 항목들만 필터링
    setTodoList(newTodoList);
  }

  return (
    <div style={{padding: '20px'}}>
      <h3>Todo List</h3>
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={todoList} removeTodo={removeTodo} />

    </div>

  )
}

export default App
