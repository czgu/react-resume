import styled from "styled-components";

export const Heading = styled.p`
  margin: 0;
  font-weight: ${(props) => props.weight ?? "bold"};
  font-size: ${(props) => props.size ?? "1.4em"};
  color: ${(props) => props.color ?? "black"};
`;

export const Text = styled.p`
  margin: 0;
  line-height: 1.5em;
  font-weight: ${(props) => props.weight ?? "500"};
  font-size: ${(props) => props.size ?? "1em"};
  color: ${(props) => props.color ?? "black"};
`;
