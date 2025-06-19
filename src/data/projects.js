const projects = [
  {
    name: "Querybook",
    time: {
      from: "Sept 2017",
      to: "Present",
    },
    techStack: ["React/Redux", "Flask", "Celery", "SocketIO", "ElasticSearch"],
    descriptions: [
      "A Big Data Query IDE with collaborative editing and visualizations.",
      "Can execute many queries with live updates by leveraging Celery and SocketIO.",
    ],
  },
  {
    name: "WebGL Engine",
    time: {
      from: "June 2017",
      to: "Nov 2017",
    },
    techStack: ["WebGL", "browserify"],
    descriptions: [
      "A 3D graphics renderer built with vanilla JS. Supports terrain/water rendering, skybox, lighting.",
    ],
  },
];

export default projects;
