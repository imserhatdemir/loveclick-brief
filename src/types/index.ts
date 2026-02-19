export type Lang = "en" | "tr";

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  usage: string;
}

export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}

export interface WorkflowSection {
  id: string;
  label: string;
  title: string;
  steps: WorkflowStep[];
}

export interface PageCard {
  tag: string;
  title: string;
  description: string;
  components: { label: string; detail: string }[];
}
