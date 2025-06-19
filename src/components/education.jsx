import React from "react";
import styled from "styled-components";


import educations from "../data/education";
import { Heading, Text } from "./ui/Text";

const StyledEducation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Education = () => {
  const educationsDOM = educations.map((education) => (
    <div className="Education">
      <Text weight="bold" size="1em">
        {education.school}
      </Text>
      <Text weight="400" size="0.8em" color="darkgray">
        {education.time.from} - {education.time.to}
      </Text>
      <Text size="0.8em" color="darkgray">{education.degree}, {education.majors.join(", ")}</Text>

    </div>
  ))

  return (
    <StyledEducation>
      <Heading color="darkblue">EDUCATION</Heading>
      {educationsDOM}
    </StyledEducation>
  );
};
