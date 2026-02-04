import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skills } from "../components/Skills";

describe("Skills", () => {
  it("renders the SKILLS heading", () => {
    render(<Skills />);
    expect(screen.getByText("SKILLS")).toBeInTheDocument();
  });

  it("renders skill categories", () => {
    render(<Skills />);
    expect(screen.getByText(/Leadership:/)).toBeInTheDocument();
    expect(screen.getByText(/GenAI\/AI:/)).toBeInTheDocument();
    expect(screen.getByText(/Platform:/)).toBeInTheDocument();
    expect(screen.getByText(/Data:/)).toBeInTheDocument();
    expect(screen.getByText(/Technologies:/)).toBeInTheDocument();
  });

  it("renders skill items", () => {
    render(<Skills />);
    expect(screen.getByText(/Engineering Management/)).toBeInTheDocument();
    expect(screen.getByText(/LLM Proxy/)).toBeInTheDocument();
    expect(screen.getByText(/Python/)).toBeInTheDocument();
  });
});
