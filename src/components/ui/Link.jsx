import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`;

export const Link = ({ url, isEmail, isInternal }) => {
  const adjustedUrl = React.useMemo(() => {
    if (isEmail) {
      return `mailto:${url}`;
    } else if (!isInternal && !url.startsWith("http")) {
      return `https://${url}`;
    }
  }, [url, isEmail, isInternal]);

  return <StyledLink href={adjustedUrl}>{url}</StyledLink>;
};
