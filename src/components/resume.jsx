import React from "react";
import styled from "styled-components";

import { A4Page } from "./A4page";
import { Header } from "./Header";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Projects } from "./Projects";

const StyledContent = styled.div`
  flex: 1;
  display: flex;
  padding-bottom: 10px;

  .main-content {
    flex: 3;
    border-right: var(--border);
    padding: 10px;
    padding-left: 0;
  }

  .sub-content {
    flex: 1;
    padding: 10px;
    padding-right: 0;
  }

  .main-content,
  .sub-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Resume = () => {
  return (
    <A4Page>
      <Header />
      <StyledContent>
        <div className="main-content">
          <Experience />
          <Projects />
        </div>
        <div className="sub-content">
          <Skills />
          <Education />
        </div>
      </StyledContent>
    </A4Page>
  );
};
