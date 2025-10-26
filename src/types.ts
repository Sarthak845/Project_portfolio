export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  tags: string[];
  isAward?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  projects: Project[];
}
