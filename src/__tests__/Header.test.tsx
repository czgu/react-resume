import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";

// Mock FontAwesome to avoid registration issues in tests
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
library.add(faLinkedin, faGithub, faEnvelope, faMobile);

describe("Header", () => {
  it("renders contact name", () => {
    render(<Header />);
    expect(screen.getByText(/Chengzhi \(Charlie\) Gu/i)).toBeInTheDocument();
  });

  it("renders tagline", () => {
    render(<Header />);
    expect(
      screen.getByText(/Senior Engineering Manager, Agent Foundations @ Pinterest/i)
    ).toBeInTheDocument();
  });

  it("renders phone number", () => {
    render(<Header />);
    expect(screen.getByText(/\(\+1\) 415-248-6575/)).toBeInTheDocument();
  });

  it("renders email link", () => {
    render(<Header />);
    const emailLink = screen.getByText("guyue1994@hotmail.com");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.closest("a")).toHaveAttribute(
      "href",
      "mailto:guyue1994@hotmail.com"
    );
  });

  it("renders github link", () => {
    render(<Header />);
    const githubLink = screen.getByText("github.com/czgu");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/czgu"
    );
  });

  it("renders linkedin link", () => {
    render(<Header />);
    const linkedinLink = screen.getByText("www.linkedin.com/in/charliegu/");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink.closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/charliegu/"
    );
  });
});
