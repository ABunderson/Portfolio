import { ProjectCard } from '@/app/components/ProjectCard';
import { projects } from '@/app/data/projects';

export default function Projects() {
  return (
    <>
      <h1>All Projects</h1>
      {projects.map((project, index) => {
        return <ProjectCard project={project} index={index} key={project.title} />;
      })}
      <hr className="border-t border-gray-500 my-6" />
    </>
  );
}
