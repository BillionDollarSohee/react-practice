export default function TodoItem({ text, index, rotation, onEdit, onDelete }) {
  return (
    <div
      className="neon-card p-5 mx-auto flex items-center justify-between w-[600px]"
      style={{
        transform: `rotate(${Math.sin((rotation + index * 35) / 15) * 3.5}deg)`,
      }}
    >
      <span 
        className="flex-1 font-bold text-2xl"
        style={{ color: "#0d0d0d" }}
      >
        {text}
      </span>

      <div className="flex gap-2">
        <button 
          className="edit-button bg-blue-400 px-3 py-2 rounded-full text-white font-black"
          onClick={() => onEdit(index)}
        >
          ✏️
        </button>
        <button 
          className="delete-button bg-red-400 px-3 py-2 rounded-full text-white font-black"
          onClick={() => onDelete(index)}
        >
          🔥
        </button>
      </div>
    </div>
  );
}
