import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Experience } from "../components/Experience";

describe("Experience", () => {
  it("renders the EXPERIENCE heading", () => {
    render(<Experience />);
    expect(screen.getByText("EXPERIENCE")).toBeInTheDocument();
  });

  it("renders experience positions", () => {
    render(<Experience />);
    expect(
      screen.getByText("Senior Engineering Manager, Agent Foundations")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Senior Engineering Manager, Analytics Platform")
    ).toBeInTheDocument();
    expect(screen.getByText("Staff Software Engineer")).toBeInTheDocument();
  });

  it("renders company and location info", () => {
    render(<Experience />);
    const companyTexts = screen.getAllByText(/@Pinterest, San Francisco, CA/i);
    expect(companyTexts.length).toBeGreaterThan(0);
  });

  it("renders time ranges", () => {
    render(<Experience />);
    expect(screen.getByText(/Dec 2025-Now/)).toBeInTheDocument();
    expect(screen.getByText(/Mar 2023-Dec 2025/)).toBeInTheDocument();
  });

  it("renders experience descriptions", () => {
    render(<Experience />);
    expect(
      screen.getByText(/Lead Agent Foundations team/i)
    ).toBeInTheDocument();
  });
});
