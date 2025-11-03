import TodoItem from "./TodoItem";

export default function TodoList({ todoList, rotation, onEdit, onDelete }) {
  return (
    <div className="w-[700px] space-y-5 mx-auto">
      {todoList.map((todo, idx) => (
        <TodoItem
          key={idx}
          text={todo}
          index={idx}
          rotation={rotation}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}