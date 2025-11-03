import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  return (
    <div className="w-[700px] flex gap-3 mb-12 mx-auto">
      <input
        className="flex-1 border-4 border-black rounded-xl px-6 py-4 text-xl font-bold"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && input.trim() && (onAdd(input), setInput(""))}
        placeholder="할 일을 입력하세요!"
        style={{ boxShadow: '6px 6px 0px #000' }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-black px-10 py-4 rounded-xl text-xl border-4 border-black"
        style={{ boxShadow: '6px 6px 0px #000' }}
        onClick={() => input.trim() && (onAdd(input), setInput(""))}
      >
        ADD
      </button>
    </div>
  );
}