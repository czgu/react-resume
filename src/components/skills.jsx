import React from "react";
import styled from "styled-components";
import skills from "../data/skills";
import { Heading, Text } from "./ui/Text";

const SkillRow = styled.div`
  margin-bottom: 8px;
  line-height: 1.4;
`;

const CategoryName = styled.span`
  font-weight: bold;
`;

export const Skills = () => {
  return (
    <div>
      <Heading color="darkblue">SKILLS</Heading>
      {skills.map(([category, items], index) => (
        <SkillRow key={index}>
          <Text>
            <CategoryName>{category}:</CategoryName> {items.join(", ")}
          </Text>
        </SkillRow>
      ))}
    </div>
  );
};
