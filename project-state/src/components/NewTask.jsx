import React from "react";

export default function NewTask({ handleAddTaskToProject }) {
  const [text, setText] = React.useState("");

  const handleClick = () => {
    handleAddTaskToProject({ text, id: Date.now() });
    setText("");
  };

  return (
    <section className="flex items-center gap-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </section>
  );
}
