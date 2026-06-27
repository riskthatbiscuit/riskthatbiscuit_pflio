import React, { useState } from 'react';
import { Projects, Project } from './project_data';
import Modal from './project_modal';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  colors: string[];
}

interface ProjectDisplayProps {
  colors: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, colors }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="max-h-56 w-1/2 cursor-pointer overflow-hidden p-1">
      <div
        onClick={showModal}
        className="card h-full overflow-hidden rounded-lg"
        style={{ backgroundColor: colors[0], color: colors[2] }}
      >
        <div className="relative">
          <Image
            src={project.image}
            alt={project.name}
            width={480}
            height={180}
            unoptimized
            className="h-24 w-full rounded-t-lg object-cover object-top"
          />
          {project.status && (
            <span className="absolute left-2 top-2 rounded bg-yellow-500 px-2 py-1 text-xs font-semibold text-white">
              {project.status}
            </span>
          )}
        </div>
        <div className="p-4">
          <div className="mb-2 flex justify-between">
            <h3 className="font-bold">{project.name}</h3>
            <div className="item-start mt-1 flex justify-end">
              {project.stack.map((tech, index) => (
                <span key={index} className="icon px-1">
                  {tech.img}
                </span>
              ))}
            </div>
          </div>
          <p className="hidden text-xs leading-5 hover:block md:block">
            {project.description}
          </p>
        </div>
      </div>
      {isModalOpen && (
        <Modal project={project} colors={colors} closeModal={closeModal} />
      )}
    </div>
  );
};

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ colors }) => {
  return (
    <div className="flex max-h-full flex-wrap justify-center overflow-scroll">
      {Projects.map((project, index) => (
        <ProjectCard key={index} project={project} colors={colors} />
      ))}
    </div>
  );
};

export default ProjectDisplay;
