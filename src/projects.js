let PROJECTS = [
  {
    id: 0,
    title: "",
    src: "",
  },
  {
    id: 1,
    title: "",
    src: "",
  },
  {
    id: 2,
    title: "",
    src: "",
  },
  {
    id: 3,
    title: "",
    src: "",
  },
];

function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id);
}

export { PROJECTS, getProjectById };