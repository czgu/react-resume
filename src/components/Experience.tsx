import experiences from "../data/experiences";
import { Heading, Text } from "./ui/Text";
import { List, ListItem } from "./ui/List";

export const Experience = () => {
  const experienceSectionDOM = experiences.map((experience, index) => {
    const { company, position, location, time, descriptions } = experience;

    return (
      <div key={index} className="mb-[5px]">
        <div className="flex items-center [&>p:not(:last-child)]:mr-[5px]">
          <Text weight="bold">{position}</Text>
          <Text size="0.9em">
            @{company}, {location}
          </Text>
        </div>
        <Text color="darkgray" size="0.8em">
          <span>
            {time.from}-{time.to}{" "}
            {time.notes ? <span>{time.notes}</span> : null}
          </span>
        </Text>
        <List>
          {descriptions.map((d, i) => (
            <ListItem key={i}>
              <Text size="0.9em">{d}</Text>
            </ListItem>
          ))}
        </List>
      </div>
    );
  });

  return (
    <div>
      <Heading color="darkblue">EXPERIENCE</Heading>
      {experienceSectionDOM}
    </div>
  );
};
