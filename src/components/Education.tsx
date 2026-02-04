import educations from "../data/education";
import { Heading, Text } from "./ui/Text";

export const Education = () => {
  const educationsDOM = educations.map((education, index) => (
    <div key={index}>
      <Text weight="bold" size="1em">
        {education.school}
      </Text>
      <Text weight="400" size="0.8em" color="darkgray">
        {education.time.from} - {education.time.to}
      </Text>
      <Text size="0.8em" color="darkgray">
        {education.degree}, {education.majors.join(", ")}
      </Text>
    </div>
  ));

  return (
    <div className="flex flex-col gap-1">
      <Heading color="darkblue">EDUCATION</Heading>
      {educationsDOM}
    </div>
  );
};
