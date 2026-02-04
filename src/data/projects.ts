import type { Project } from "../types";

const projects: Project[] = [
  {
    name: "Pinterest/Querybook (2.2k GitHub stars)",
    time: {
      from: "Sept 2017",
      to: "Present",
    },
    techStack: ["React/Redux", "Flask", "Celery", "SocketIO", "ElasticSearch"],
    descriptions: [
      "A Big Data Query IDE with collaborative editing and visualizations.",
      "Maximize query parallization with live updates by leveraging Celery and SocketIO.",
    ],
  },
];

export default projects;
