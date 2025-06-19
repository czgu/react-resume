const experiences = [
  {
    company: "Pinterest",
    position: "Senior Engineering Manager",
    location: "San Francisco, CA",
    time: {
      from: "Mar 2023",
      to: "Present",
    },

    descriptions: [
      `Lead the Analytics Platform team spanning analytics tooling, internal tools platform, ML & Workflow tooling, and GenAI enablement to improve dev and general productivity.`,
      `Drive development of internal tools like Querybook, Superset, ITP, PDocs, and MLHub for data, tooling, and documentation needs.`,
      `Drove wide adoption of GenAI at Pinterest by enabling LLM API access, prompt eval tooling, and productivity tools.`
    ],
  },
  {
    company: "Pinterest",
    position: "Senior Software Engineer",
    location: "San Francisco, CA",
    time: {
      from: "June 2017",
      to: "Mar 2023",
      notes: "(internship Jan - May 2015, Jun - Aug 2016)",
    },

    descriptions: [
      `Led development and open-sourcing of Querybook, one of Pinterest's most-used and highest-rated internal tools; scaled it with a plugin-based architecture and improved usability with CI/CD and comprehensive docs.`,
      `Improved the Internal Tools Platform with a Docker-based VSCode dev setup and streamlined Jenkins Groovy pipelines.`,
      `Initiated and designed data tools like Flohub (SQL scheduler UI) and WQuery (template-based query interface).`

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
      "Productionized a random forest-based anomaly detector on Cosmos and built a support ticket categorizer with a manual correction UI.",
    ],
  },
];

export default experiences;
