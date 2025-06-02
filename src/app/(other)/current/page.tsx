import { ProjectCard } from '@/app/components/ProjectCard';
import { currentProjects } from '@/app/data/projects';

export default function Current() {
  return (
    <>
      <h1>Current Projects</h1>
      <p>Things I am currently working on.</p>
      {currentProjects.map((project, index) => {
        return <ProjectCard project={project} index={index} key={project.title} />;
      })}
      <hr className="border-t border-gray-500 my-6" />
    </>
  );
}
