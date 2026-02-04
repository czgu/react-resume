import projects from "../data/projects";
import { Heading, Text } from "./ui/Text";
import { List, ListItem } from "./ui/List";

export const Projects = () => {
  const projectsDOM = projects.map((project) => (
    <div key={project.name} className="my-[5px]">
      <div className="flex items-center justify-between">
        <Heading size="1em">{project.name}</Heading>
        <Text color="darkgray" size="0.8em">
          {project.time.from} - {project.time.to}
        </Text>
      </div>
      <Text weight="400" color="darkgray" size="0.8em">
        {project.techStack.join(", ")}
      </Text>
      <List>
        {project.descriptions.map((desc, descIdx) => (
          <ListItem key={descIdx}>{desc}</ListItem>
        ))}
      </List>
    </div>
  ));

  return (
    <div>
      <Heading color="darkblue">PROJECT HIGHLIGHTS</Heading>
      {projectsDOM}
    </div>
  );
};
