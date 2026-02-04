import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contact from "../data/contact";
import { Link } from "./ui/Link";
import { Heading } from "./ui/Text";
import type { ContactRowProps } from "../types";

const ContactRow = ({ icon, children }: ContactRowProps) => {
  return (
    <span>
      <span className="h-full w-5 inline-flex justify-center">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="ml-[5px]">{children}</span>
    </span>
  );
};

export const Header = () => {
  return (
    <div className="flex justify-between pb-[10px] border-b-[3px] border-b-[#bbb]">
      <div className="flex flex-col justify-between">
        <Heading size="2.5em">{contact.name}</Heading>
        <Heading size="1em" weight="500">
          {contact.tagline}
        </Heading>
      </div>
      <div className="flex flex-col items-start">
        <ContactRow icon="mobile">{contact.phone}</ContactRow>
        <ContactRow icon="envelope">
          <Link url={contact.email} isEmail />
        </ContactRow>
        <ContactRow icon={["fab", "github"]}>
          <Link url={contact.github} />
        </ContactRow>
        <ContactRow icon={["fab", "linkedin"]}>
          <Link url={contact.linkedin} />
        </ContactRow>
      </div>
    </div>
  );
};
