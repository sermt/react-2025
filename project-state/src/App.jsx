import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: null,
    projects: [],
    isCreatingNew: false,
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
      isCreatingNew: true,
    }));
  };

  const handleAddProject = (newProject) => {
    setProjectState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      isCreatingNew: false,
      selectedProjectId: NewProject.id,
    }));
  };

  const handleAddTaskToProject = (newTask) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === selectedProject.id) {
            return {
              ...project,
              tasks: [...project.tasks, newTask],
            };
          }
          return project;
        }),
      };
    });
  };
  const handleDeleteTaskToProject = (taskId) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === selectedProject.id) {
            return {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            };
          }
          return project;
        }),
      };
    });
  };

  const handleCancelNewProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      isCreatingNew: false,
    }));
  };

  const handleSelectProject = (selectedProjectId) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId,
      isCreatingNew: false,
    }));
  };

  const handleDeleteProject = (selectedProjectId) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
      projects: prevState.projects.filter(({ id }) => id !== selectedProjectId),
    }));
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  const content = projectState.isCreatingNew ? (
    <NewProject
      setNewProject={handleAddProject}
      onCancel={handleCancelNewProject}
    />
  ) : projectState.selectedProjectId ? (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      handleNewTask={handleAddTaskToProject}
      handleDeleteTask={handleDeleteTaskToProject}
    />
  ) : (
    <NoProjectSelected onStartAddProject={handleStartAddProject} />
  );

  return (
    <main className="h-screen gap-8 my-8 flex">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projectState={projectState}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
