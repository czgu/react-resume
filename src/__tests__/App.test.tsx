import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it("renders the resume with contact name", () => {
    render(<App />);
    expect(screen.getByText(/Chengzhi \(Charlie\) Gu/i)).toBeInTheDocument();
  });

  it("renders all main sections", () => {
    render(<App />);
    expect(screen.getByText("EXPERIENCE")).toBeInTheDocument();
    expect(screen.getByText("SKILLS")).toBeInTheDocument();
    expect(screen.getByText("EDUCATION")).toBeInTheDocument();
    expect(screen.getByText("PROJECT HIGHLIGHTS")).toBeInTheDocument();
  });
});
