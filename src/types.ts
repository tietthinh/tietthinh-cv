export interface BasicInfo {
  avatarUrl: string;
  name: string;
  dob: string;
  email: string;
  education: string;
  address: string;
  github: string;
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

export interface Hobby {
  name: string;
  images: string[];
  description: string;
}
export interface Skill {
  name: string;
  priority: boolean;
  image: string;
  description: string;
}

// Props zone
export interface TagProps {
  name: string;
  id: string;
  count?: number;
  autoColour?: boolean;
  onClick?: (id: string) => void;
}

export interface BasicInfoProps {
  basicInfo: BasicInfo;
}

export interface HobbyProps {
  hobbies: Hobby[];
}

export interface ProjectsProps {
  projectProps: Project[];
}

export interface SkillsProps {
  skills: Skill[];
}
export interface SectionProps {
  onCollapse?: () => void;
  onExpand?: () => void;
  title: string;
  titleCaption?: string;
  collapsible?: boolean;
}
