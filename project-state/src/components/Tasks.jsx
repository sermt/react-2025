import React from "react";
import NewTask from "./NewTask";

export default function Tasks({ tasks = [], onNewTask, onDeleteTask }) {
  const content = tasks.length ? (
    <ul className="p-4 mt-8 rounded-md bg-stone-100">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between my-4">
          <span>{task.text}</span>
          <button
            className="text-stone-700 hover:text-red-500"
            onClick={() => onDeleteTask(task.id)}
          >
            Clear
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-stone-800 mb-4">This project does not have tasks yet.</p>
  );
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask handleAddTaskToProject={onNewTask} />
      {content}
    </section>
  );
}
