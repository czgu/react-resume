import type { ReactNode } from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

// Data Models
export interface TimeRange {
  from: string;
  to: string;
  notes?: string;
}

export interface Contact {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  time: TimeRange;
  descriptions: string[];
}

export interface Education {
  school: string;
  time: TimeRange;
  degree: string;
  majors: string[];
}

export type SkillCategory = [string, string[]];
export type Skills = SkillCategory[];

export interface Project {
  name: string;
  time: TimeRange;
  techStack: string[];
  descriptions: string[];
}

// Component Props
export interface TextProps {
  weight?: string;
  size?: string;
  color?: string;
  children?: ReactNode;
  className?: string;
}

export interface HeadingProps extends TextProps {}

export interface LinkProps {
  url: string;
  isEmail?: boolean;
  isInternal?: boolean;
}

export interface ListProps {
  children?: ReactNode;
}

export interface ListItemProps {
  children?: ReactNode;
}

export interface A4PageProps {
  children?: ReactNode;
}

export interface ContactRowProps {
  icon: IconProp;
  children?: ReactNode;
}
