import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  projectState,
  onSelectProject,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>

      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projectState.projects.map((project) => {
          const classes = `w-full text-left px-3 py-2 rounded-md my-1
          ${
            project.id === projectState.selectedProjectId
              ? "bg-stone-800 text-white"
              : "text-stone-500 hover:bg-stone-800 hover:text-white"
          }transition-colors duration-200`;
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={classes}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
