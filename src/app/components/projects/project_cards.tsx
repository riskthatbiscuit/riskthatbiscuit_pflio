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
    <div className="w-1/2 cursor-pointer overflow-hidden p-1">
      <div
        onClick={showModal}
        className="card h-full overflow-hidden rounded-lg"
        style={{backgroundColor: colors[0], color:colors[2]}}
      >
        <img
          src={project.image}
          alt={project.name}
          className="h-16 w-full rounded-t-lg object-cover object-top"
        />
        <div className="p-4">
          <h3 className="font-bold">{project.name}</h3>
          <div className="item-start mt-1 flex justify-end">
            {project.stack.map((tech, index) => (
              <span key={index} className="icon px-1">
                {tech.img}
              </span>
            ))}
          </div>
          <p className="hidden text-sm  hover:block md:block">
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
    <div className="flex h-full flex-wrap justify-center">
      {Projects.map((project, index) => (
        <ProjectCard key={index} project={project} colors={colors} />
      ))}
    </div>
  );
};

export default ProjectDisplay;
