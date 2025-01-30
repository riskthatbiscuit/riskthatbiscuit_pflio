import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaBootstrap,  } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiHandlebarsdotjs,
  SiHeroku,
  SiDjango,
  SiPostgresql,
  SiTypescript,
} from 'react-icons/si';

// Define the structure of the technology stack item
interface StackItem {
  name: string;
  img: JSX.Element;
}

// Define the structure of a project
export interface Project {
  name: string;
  image: string;
  stack: StackItem[];
  description: string;
  link: string;
  status?: string;
}

// Projects array
export const Projects: Project[] = [
  {
    name: 'Tegro Partners',
    image: './homeTiles/TegroPartners.png',
    stack: [
      { name: 'Typescript', img: <SiTypescript /> },
      { name: 'React', img: <FaReact /> },
      { name: 'TailwindCSS', img: <SiTailwindcss /> },
    ],
    description:
      'Client driven, live, front-end website for a finance startup focusing on modern, responsive designs.',
    link: 'http://www.tegro.partners',
  },
  {
    name: 'Tech Talent',
    image: './homeTiles/tech_talent.png',
    stack: [
      { name: 'MySQL', img: <SiMysql /> },
      { name: 'Handlebars', img: <SiHandlebarsdotjs /> },
      { name: 'Express', img: <SiExpress /> },
      { name: 'Heroku', img: <SiHeroku /> },
    ],
    description:
      'Full stack web application that allows users to browse Dev job listings, save jobs to the database, update status, and add notes.',
    link: 'https://tech-talent1-4df2fd0f5e90.herokuapp.com/',
  },
  {
    name: 'Employee Tracker',
    image: './homeTiles/EmployeeTracker.png',
    stack: [
      { name: 'React', img: <FaReact /> },
      { name: 'Node.js', img: <FaNodeJs /> },
      { name: 'Express', img: <SiExpress /> },
      { name: 'MySQL', img: <SiMysql /> },
      { name: 'TailwindCSS', img: <SiTailwindcss /> },
    ],
    description:
      'A RESTful application, Employee Tracker is a robust, full-stack web application designed to streamline the management of employee data within an organization.',
    link: 'https://infinite-waters-93089-7bd83e9457e8.herokuapp.com/',
  },
  {
    name: 'Op Risk Dashboard',
    image: './homeTiles/manufacturing.webp',
    stack: [
      { name: 'MongoDB', img: <SiMongodb /> },
      { name: 'React', img: <FaReact /> },
      { name: 'TailwindCSS', img: <SiTailwindcss /> },
      { name: 'Node.js', img: <FaNodeJs /> },
      { name: 'Express', img: <SiExpress /> },
    ],
    description:
      'A simple dahsboard to track operational risk events and their impact on the organization.',
    link: 'https://op-risk-dashboard-git-main-riskthatbiscuits-projects.vercel.app/',
    status: 'In Development',
  },
  {
    name: 'Personal Portfolio Dashboard including VaR calculations',
    image: './homeTiles/agriculture.jpeg',
    stack: [
      { name: 'Python', img: <FaPython/> },
      { name: 'Django', img: <SiDjango /> },
      { name: 'React', img: <FaReact /> },
      { name: 'MongoDB', img: <SiMongodb /> },
    ],
    description:
      'A personal financial dashboard that includes Value at Risk calculations for a portfolio of assets.',
    link: 'www.waterfall.finance',
    status: 'In Development',
  },
  {
    name: 'PetRescue',
    image: './homeTiles/waste.jpeg',
    stack: [
      { name: 'React', img: <FaReact /> },
      { name: 'Node.js', img: <FaNodeJs /> },
      { name: 'Express', img: <SiExpress /> },
      { name: 'MongoDB', img: <SiMongodb /> },
    ],
    description:
      'An application to facilitate pet adoption, featuring listings, shelters, and pet matching functionalities.',
    link: 'www.waterfall.finance',
    status: 'In Development',
  },
];
