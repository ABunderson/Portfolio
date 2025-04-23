import { Project } from '../types/Project';
import Image from 'next/image';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <>
      <hr className="border-t border-gray-500 my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl m-auto gap-4">
        <div>
          <h2>
            {project.year}: {project.title}
          </h2>
          <p>{project.subtitle}</p>
          <br />
          <h3>Description</h3>
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <br />
          <h3>Skills</h3>
          <ul className="list-disc pl-4">
            {project.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <br />
          <LinkSection links={project.links} />
        </div>
        <div className="w-full max-w-[450px] mx-auto">
          <Image
            src={project.img}
            alt={project.alt}
            width={400}
            height={300}
            className="rounded-lg"
            priority={index === 0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* gallery */}
      </div>
    </>
  );
};

type Links = Project['links'];

type LinkProps = {
  links: Links;
};

function LinkSection({ links }: LinkProps) {
  return (
    <>
      <h3>Links</h3>
      <div className="underline">
        {links.site && (
          <>
            <a href={links.site} target="_blank">
              Live Site
            </a>
            <br />
          </>
        )}

        {links.github && (
          <>
            <a href={links.github} target="_blank">
              GitHub Repo
            </a>
            <br />
          </>
        )}
        {links.video && (
          <>
            <a href={links.video} target="_blank">
              Video Overview
            </a>
            <br />
          </>
        )}
      </div>
    </>
  );
}
