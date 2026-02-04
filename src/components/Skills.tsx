import skills from "../data/skills";
import { Heading, Text } from "./ui/Text";

export const Skills = () => {
  return (
    <div>
      <Heading color="darkblue">SKILLS</Heading>
      {skills.map(([category, items], index) => (
        <div key={index} className="my-3 leading-[1.4]">
          <Text>
            <span className="font-bold">{category}:</span>{" "}
            <span className="font-normal">{items.join(", ")}</span>
          </Text>
        </div>
      ))}
    </div>
  );
};
