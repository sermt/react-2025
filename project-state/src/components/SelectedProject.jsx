import React from "react";
import Button from "./Button";

export default function SelectedProject({ project, onDeleteProject }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  console.log("project", project);
  return (
    <section className="w-full max-w-2xl mt-16 p-6 bg-white rounded-2xl shadow-md">
      <header className="mb-6 border-b border-stone-300 pb-4 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-stone-700 mb-1">
            {project.title}
          </h2>
          <p className="text-sm text-stone-500">{formattedDate}</p>
        </div>
        <Button onClick={() => onDeleteProject(project.id)}>Delete</Button>
      </header>
      <p className="text-stone-700 whitespace-pre-wrap leading-7 tracking-normal text-[15px]">
        {project.description}
      </p>
    </section>
  );
}
