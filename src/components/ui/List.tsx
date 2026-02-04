import type { ListProps, ListItemProps } from "../../types";

export const List = ({ children }: ListProps) => {
  return <ul className="m-0 list-[circle]">{children}</ul>;
};

export const ListItem = ({ children }: ListItemProps) => {
  return <li className="[&:not(:last-child)]:mb-[5px]">{children}</li>;
};
