import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    current: true,
    title: 'Portfolio Website',
    subtitle: 'A personal portfolio showcasing my work',
    year: 2025,
    description: ['Coming', 'This is the site you are looking at right now.'],
    skills: ['Next.js', 'TypeScript', 'React.js', 'Tailwind'],
    links: { github: 'https://github.com/ABunderson/Portfolio', site: 'easter-egg' },
    img: '/placeholder.png',
    alt: 'A screenshot of this website.',
    gallery: [],
    video: null,
  },
  {
    current: true,
    title: 'Shadow Casters',
    subtitle: 'A WordPress site I am enhancing for an author friend',
    year: 2025,
    description: ['Coming'],
    skills: ['WordPress', 'Elementor'],
    links: { site: 'https://shadowcasterseries.com/' },
    img: '/ShadowCasters.png',
    alt: 'The Shadow Casters book series website.',
    gallery: [],
    video: null,
  },
];

export const currentProjects = projects.filter((project) => project.current);
