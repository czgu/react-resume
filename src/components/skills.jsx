import React from "react";
import styled from "styled-components";
import skills from "../data/skills";
import { Heading, Text } from "./ui/Text";

const SkillRow = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const CategoryName = styled.span`
  font-weight: bold;
`;

const CategoryDesc = styled.span`
  font-weight: 400;
`

export const Skills = () => {
  return (
    <div>
      <Heading color="darkblue">SKILLS</Heading>
      {skills.map(([category, items], index) => (
        <SkillRow key={index}>
          <Text>
            <CategoryName>{category}:</CategoryName> <CategoryDesc>{items.join(", ")}</CategoryDesc>
          </Text>
        </SkillRow>
      ))}
    </div>
  );
};
