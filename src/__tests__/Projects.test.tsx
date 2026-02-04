import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Projects } from "../components/Projects";

describe("Projects", () => {
  it("renders the PROJECT HIGHLIGHTS heading", () => {
    render(<Projects />);
    expect(screen.getByText("PROJECT HIGHLIGHTS")).toBeInTheDocument();
  });

  it("renders project name", () => {
    render(<Projects />);
    expect(screen.getByText(/Pinterest\/Querybook/)).toBeInTheDocument();
  });

  it("renders project time range", () => {
    render(<Projects />);
    expect(screen.getByText(/Sept 2017 - Present/)).toBeInTheDocument();
  });

  it("renders tech stack", () => {
    render(<Projects />);
    expect(
      screen.getByText(/React\/Redux, Flask, Celery, SocketIO, ElasticSearch/)
    ).toBeInTheDocument();
  });

  it("renders project descriptions", () => {
    render(<Projects />);
    expect(
      screen.getByText(/A Big Data Query IDE with collaborative editing/i)
    ).toBeInTheDocument();
  });
});
