import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Education } from "../components/Education";

describe("Education", () => {
  it("renders the EDUCATION heading", () => {
    render(<Education />);
    expect(screen.getByText("EDUCATION")).toBeInTheDocument();
  });

  it("renders school names", () => {
    render(<Education />);
    expect(screen.getByText("UT Austin")).toBeInTheDocument();
    expect(screen.getByText("University of Waterloo")).toBeInTheDocument();
  });

  it("renders degrees", () => {
    render(<Education />);
    expect(
      screen.getByText(/Master of Science, Computer Science/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Bachelor of Mathmatics, Computer Science, Combinatorics & Optimization/i)
    ).toBeInTheDocument();
  });

  it("renders time ranges", () => {
    render(<Education />);
    expect(screen.getByText(/Sept 2021 - Apr 2024/)).toBeInTheDocument();
    expect(screen.getByText(/Sept 2012 - Dec 2016/)).toBeInTheDocument();
  });
});
