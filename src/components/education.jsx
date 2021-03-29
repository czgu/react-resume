import React from "react";
import education from "../data/education";
import { Heading, Text } from "./ui/Text";

export const Education = () => {
  return (
    <div className="Education">
      <Heading color="darkblue">EDUCATION</Heading>
      <Text weight="bold" size="1em">
        {education.school}
      </Text>
      <Text weight="400" size="0.8em" color="darkgray">
        {education.time.from} - {education.time.to}
      </Text>
      <Text>{education.degree}</Text>
      <Text size="0.8em" color="darkgray">
        Majored in {education.majors.join(", ")}
      </Text>
      <Text size="0.8em" color="darkgray">
        {education.gpa} GPA
      </Text>
    </div>
  );
};
