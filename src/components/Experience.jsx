import React from "react";
import styled from "styled-components";
import experiences from "../data/experiences";
import { Heading, Text } from "./ui/Text";
import { List, ListItem } from "./ui/List";

const StyledExperience = styled.div`
  .experience-title {
    display: flex;
    align-items: center;

    p:not(:last-child) {
      margin-right: 5px;
    }
  }
  margin-bottom: 5px;
`;

export const Experience = () => {
  const experienceSectionDOM = experiences.map((experience, index) => {
    const { company, position, location, time, descriptions } = experience;

    return (
      <StyledExperience key={index}>
        <div className="experience-title">
          <Text weight="bold">{position}</Text>
          <Text size="0.9em">
            @{company}, {location}
          </Text>
        </div>
        <Text color="darkgray" size="0.8em" className="experience-time">
          <span>
            {time.from}-{time.to}{" "}
            {time.notes ? <span>{time.notes}</span> : null}
          </span>
        </Text>
        <List>
          {descriptions.map((d, i) => (
            <ListItem key={i}>
              <Text>{d}</Text>
            </ListItem>
          ))}
        </List>
      </StyledExperience>
    );
  });
  return (
    <div>
      <Heading color="darkblue">EXPERIENCE</Heading>
      {experienceSectionDOM}
    </div>
  );
};
