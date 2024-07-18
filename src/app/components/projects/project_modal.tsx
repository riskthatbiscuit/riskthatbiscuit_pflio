// Modal.tsx
import React from 'react';
import { Project } from './project_data';
// import Image from 'next/image';

interface ModalProps {
  project: Project;
  colors: string[];
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, colors, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="z-50 my-4 mt-16 max-h-screen w-11/12 overflow-hidden">
        <div
          className="max-h-fit max-w-lg rounded-lg border-2 shadow-lg"
          style={{
            background: colors[1],
            borderColor: colors[0],
            color: colors[2],
          }}
        >
          <img
            src={project.image}
            alt={project.name}
            className="h-48 w-full rounded-t-lg object-cover object-top"
          />
          <div className="p-4">
            <h3 className="mb-2 text-lg font-bold">{project.name}</h3>3
            <p className="py-2">{project.description}</p>
            <h4 className="mt-2 font-semibold">Tech Stack:</h4>
            <ul className="list-inside list-disc">
              {project.stack.map((tech, index) => (
                <li key={index}>{tech.name}</li>
              ))}
            </ul>
            {project.link && (
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {project.link}
                </a>
              </div>
            )}
          </div>
          <div className="m-6 flex justify-end">
            <button
              onClick={closeModal}
              className="btn border-none"
              style={{ background: colors[2], color: colors[1] }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
