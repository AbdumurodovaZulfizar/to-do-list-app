const projectModel = () => {
  const project = (title) => ({ title });

  const all = () => JSON.parse(localStorage.getItem('projects')) || [{ title: 'Today' }];

  const save = (project) => {
    const projects = all();
    if (projects) {
      if (!projects.some((item) => item.title === project.title)) {
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
      }
    } else {
      localStorage.setItem('projects', JSON.stringify([project]));
    }
  };

  const get = (id) => {
    const projects = all();
    return projects[id];
  };

  const remove = (id) => {
    const projects = all();
    projects.splice(id, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return {
    project, all, save, get, remove,
  };
};

export default projectModel;
