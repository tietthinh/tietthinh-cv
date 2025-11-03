export interface TagProps {
  name: string;
  id: string;
  count?: number;
  onClick?: (id: string) => void;
}

export interface BasicInfoProps {
  avatarUrl: string;
  name: string;
  dob: string;
  email: string;
  education: string;
  address: string;
}

export interface MainProps {
  tags: Omit<TagProps, "onClick">[];
  basicInfo: BasicInfoProps;
  projects: Project[];
}

export interface Project {
  timeStart: string;
  timeEnd: string | null;
  name: string;
  domain: string[];
  company: string;
  companyLogo: string;
  description: string;
  techstack: string[];
  position: string;
  role: string;
}

export interface ProjectsProps {
  projectProps: Project[];
}
