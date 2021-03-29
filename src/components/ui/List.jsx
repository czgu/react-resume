import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  list-style-type: circle;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
