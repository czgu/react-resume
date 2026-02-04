import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text, Heading } from "../components/ui/Text";
import { Link } from "../components/ui/Link";
import { List, ListItem } from "../components/ui/List";

describe("Text Component", () => {
  it("renders children", () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("applies default styles", () => {
    render(<Text>Test</Text>);
    const element = screen.getByText("Test");
    expect(element).toHaveAttribute("style", expect.stringContaining("font-weight: 500"));
    expect(element).toHaveAttribute("style", expect.stringContaining("font-size: 1em"));
    expect(element).toHaveAttribute("style", expect.stringContaining("color: black"));
  });

  it("applies custom styles", () => {
    render(<Text weight="bold" size="2em" color="red">Custom</Text>);
    const element = screen.getByText("Custom");
    expect(element).toHaveAttribute("style", expect.stringContaining("font-weight: bold"));
    expect(element).toHaveAttribute("style", expect.stringContaining("font-size: 2em"));
    expect(element).toHaveAttribute("style", expect.stringContaining("color: red"));
  });
});

describe("Heading Component", () => {
  it("renders children", () => {
    render(<Heading>My Heading</Heading>);
    expect(screen.getByText("My Heading")).toBeInTheDocument();
  });

  it("applies default bold weight", () => {
    render(<Heading>Bold Heading</Heading>);
    const element = screen.getByText("Bold Heading");
    expect(element).toHaveStyle({ fontWeight: "bold" });
  });

  it("applies custom styles", () => {
    render(<Heading weight="normal" size="3em" color="blue">Blue Heading</Heading>);
    const element = screen.getByText("Blue Heading");
    expect(element).toHaveAttribute("style", expect.stringContaining("font-weight: normal"));
    expect(element).toHaveAttribute("style", expect.stringContaining("font-size: 3em"));
    expect(element).toHaveAttribute("style", expect.stringContaining("color: blue"));
  });
});

describe("Link Component", () => {
  it("renders url text", () => {
    render(<Link url="example.com" />);
    expect(screen.getByText("example.com")).toBeInTheDocument();
  });

  it("adds https prefix for external links", () => {
    render(<Link url="example.com" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("adds mailto prefix for email links", () => {
    render(<Link url="test@example.com" isEmail />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "mailto:test@example.com");
  });

  it("preserves http/https URLs", () => {
    render(<Link url="https://example.com" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("keeps internal links unchanged", () => {
    render(<Link url="/internal/path" isInternal />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/internal/path");
  });
});

describe("List Components", () => {
  it("renders List with children", () => {
    render(
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("List uses circle style", () => {
    render(
      <List>
        <ListItem>Test</ListItem>
      </List>
    );
    const list = screen.getByRole("list");
    expect(list).toHaveClass("list-[circle]");
  });
});
