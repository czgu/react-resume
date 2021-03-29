import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contact from "../data/contact";
import { Link } from "./ui/Link";
import { Heading } from "./ui/Text";

export const StyledContactRow = styled.span`
  .contact-row-icon {
    height: 100%;
    width: 20px;
    display: inline-flex;
    justify-content: center;
  }
  .contact-row-data {
    margin-left: 5px;
  }
`;
const ContactRow = ({ icon, children }) => {
  return (
    <StyledContactRow>
      <span className="contact-row-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="contact-row-data">{children}</span>
    </StyledContactRow>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: var(--border);

  .contact-name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      margin: 0;
    }
    h3 {
      margin: 0;
      font-weight: 500;
    }
  }
  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="contact-name">
        <Heading size={"2.5em"}>{contact.name}</Heading>
        <Heading size={"1em"} weight={"500"}>
          {contact.tagline}
        </Heading>
      </div>
      <div className="contact-info">
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
    </StyledHeader>
  );
};
