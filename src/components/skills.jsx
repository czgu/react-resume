import React from "react";
import styled from "styled-components";
import skills from "../data/skills";
import { Heading, Text } from "./ui/Text";
import { List, ListItem } from "./ui/List";

const StyledListContainer = styled.div`
  ${List} {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const SkillList = ({ items }) => {
  return (
    <StyledListContainer>
      <List>
        {items.map((item, i) => (
          <ListItem key={i}>
            <Text>{item}</Text>
          </ListItem>
        ))}
      </List>
    </StyledListContainer>
  );
};

export const Skills = () => {
  const renderSkills = (skillItem, level = 0) => {
    if (
      skillItem.length === 2 &&
      typeof skillItem[0] === "string" &&
      Array.isArray(skillItem[1])
    ) {
      return (
        <div>
          <Heading size={level === 1 ? "1.1em" : "1em"}>
            {skillItem[0]}
          </Heading>
          <div>{renderSkills(skillItem[1], level)}</div>
        </div>
      );
    } else if (skillItem.length) {
      if (Array.isArray(skillItem[0])) {
        return skillItem.map((subItem, i) => (
          <div key={i}>{renderSkills(subItem, level + 1)}</div>
        ));
      } else {
        return <SkillList items={skillItem} />;
      }
    }
  };

  const skillsDOM = renderSkills(skills);

  return (
    <div>
      <Heading color="darkblue">SKILLS</Heading>
      {skillsDOM}
    </div>
  );
};
