import React from "react";
import styled from "styled-components";
import contact from "../data/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContactRow = styled.span``;
const ContactRow = ({ icon, children }) => {
  return (
    <StyledContactRow>
      <FontAwesomeIcon icon={icon} />
      <span className="contact-row-data">{children}</span>
    </StyledContactRow>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
    align-items: flex-end;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="contact-name">
        <h1>{contact.name}</h1>
        <h3>{contact.tagline}</h3>
      </div>
      <div className="contact-info">
        <ContactRow icon="mobile">{contact.phone}</ContactRow>
        <ContactRow icon="envelope">{contact.email}</ContactRow>
        <ContactRow icon={["fab", "github"]}>{contact.github}</ContactRow>
        <ContactRow icon={["fab", "linkedin"]}>{contact.linkedin}</ContactRow>
      </div>
    </StyledHeader>
  );
};
