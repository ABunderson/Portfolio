export type Project = {
  current: boolean;
  title: string;
  subtitle: string;
  year: number;
  description: string[];
  skills: string[];
  links: {
    github?: string;
    site?: string;
  };
  img: string;
  alt: string;
  gallery: string[];
  video: string | null;
};
