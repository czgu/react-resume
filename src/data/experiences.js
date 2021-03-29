const experiences = [
  {
    company: "Pinterest",
    position: "Senior Software Engineer",
    location: "San Francisco, CA",
    time: {
      from: "June 2017",
      to: "Present",
      notes: "(internship Jan - May 2015, Jun - Aug 2016)",
    },

    descriptions: [
      `Pioneered and developed Querybook, a big data IDE web app built with React and Flask. It is one of the most widely used internal tools at Pinterest.`,
      `Refactored and contributed to the open-source Querybook (querybook.org). Rewrote the code to be plugin-based to separate internal logic. Wrote comprehensive documentation for users and developers. Setup Github actions for CI/CD.`,
      `Contributed to Internal Tools Platform, which is a collection of libraries and pipelines to make internal web development easier. Implemented a Docker based VSCode dev environment and improved the Jenkins Groovy pipeline.`,
      `Designed and kickstarted multiple data tool projects such as Flohub (UI-based SQL query scheduler) and WQuery (template-based query UI).`,
    ],
  },
  {
    company: "University of Waterloo",
    position: "Undergrad Research Assistant",
    location: "Waterloo, ON",
    time: {
      from: "Sept 2016",
      to: "Dec 2016",
    },

    descriptions: [
      "Developed a network motif detector based on mfinder to analyze large graphs under supervision of Prof. Semih Salihoglu.",
    ],
  },
  {
    company: "Microsoft",
    position: "Software Engineer Intern",
    location: "Redmond, WA",
    time: {
      from: "Sept 2015",
      to: "Dec 2015",
    },

    descriptions: [
      "Improved and productionized an anomaly detector based on the random forest to run on Cosmos.",
      "Developed a support ticket categorizer alongside a website for manual correction.",
    ],
  },
  {
    company: "Osellus Mobile",
    position: "Software Developer (Co-op)",
    location: "Toronto, ON",
    time: {
      from: "May 2014",
      to: "Aug 2014",
    },

    descriptions: [
      "Developed an animation creator using Cocoa which can export animations that can be played on Mac and IOS.",
    ],
  },
];

export default experiences;
