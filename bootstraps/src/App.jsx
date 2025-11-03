import { useState, useEffect } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);  // ← 빈 배열로 시작!
  const [rotation, setRotation] = useState(0);

  const getRandomColor = () => {
    const colors = ['#FF1493', '#00FF00', '#FF4500', '#9400D3', '#FFD700', '#00CED1', '#FF69B4'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const timer = setInterval(() => setRotation((r) => r + 1), 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-16 overflow-hidden">

      {/* 제목 중앙 고정 */}
      <div className="w-full flex justify-center mb-16 relative">
        <h1
          className="text-8xl font-black select-none"
          style={{
            transform: `rotate(${Math.sin(rotation / 8) * 12}deg) scale(${1 + Math.sin(rotation / 4) * 0.2})`,
            color: getRandomColor(),
            textShadow: `
              12px 12px 0px rgba(0,0,0,0.8), 
              18px 18px 0px ${getRandomColor()},
              -5px -5px 20px ${getRandomColor()},
              5px 5px 20px ${getRandomColor()}
            `,
            fontFamily: "Comic Sans MS, cursive",
            transition: 'color 0.5s ease'
          }}
        >
          🎪 할일 서커스 🎪
        </h1>
        
        {/* 날아다니는 이모지들 */}
        <span 
          className="absolute text-6xl"
          style={{
            left: `${20 + Math.sin(rotation / 15) * 10}%`,
            top: `${10 + Math.cos(rotation / 12) * 5}%`,
            transform: `rotate(${rotation * 2}deg)`,
          }}
        >
          🎪
        </span>
        <span 
          className="absolute text-6xl"
          style={{
            right: `${15 + Math.cos(rotation / 18) * 10}%`,
            top: `${15 + Math.sin(rotation / 10) * 5}%`,
            transform: `rotate(${-rotation * 2}deg)`,
          }}
        >
          🎪
        </span>
      </div>

      {/* 입력폼 중앙 */}
      <TodoForm onAdd={(t) => setTodoList([...todoList, t])} />

      {/* 리스트 중앙 */}
      <TodoList
        todoList={todoList}
        rotation={rotation}
        onDelete={(i) => setTodoList(todoList.filter((_, idx) => idx !== i))}
        onEdit={(i) => {
          const v = prompt("새 값?");
          if (v) {
            const arr = [...todoList];
            arr[i] = v;
            setTodoList(arr);
          }
        }}
      />

    </div>
  );
}

export default App;