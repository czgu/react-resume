import React from "react";
import styled from "styled-components";
import projects from "../data/projects";
import { Heading, Text } from "./ui/Text";
import { List, ListItem } from "./ui/List";

const StyledProject = styled.div`
  .project-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  margin: 5px 0px;
`;

export const Projects = () => {
  const projectsDOM = projects.map((project) => (
    <StyledProject key={project.name}>
      <div className="project-title">
        <Heading size="1.1em">{project.name}</Heading>{" "}
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
    </StyledProject>
  ));
  return (
    <div className="Projects">
      <Heading color="darkblue">PROJECT HIGHLIGHTS</Heading>
      {projectsDOM}
    </div>
  );
};
