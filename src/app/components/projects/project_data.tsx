import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaBootstrap } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiHandlebarsdotjs,
  SiHeroku,
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
}

// Projects array
export const Projects: Project[] = [
  {
    name: 'Waterfall Finance',
    image: './homeTiles/WaterfallFinance.png',
    stack: [
      { name: 'Typescript', img: <SiTypescript /> },
      { name: 'React', img: <FaReact /> },
      { name: 'TailwindCSS', img: <SiTailwindcss /> },
    ],
    description:
      'Client driven, live, front-end website for a finance startup focusing on modern, responsive designs.',
    link: 'http://www.waterfall.finance',
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
      'Employee Tracker is a robust, full-stack web application designed to streamline the management of employee data within an organization.',
    link: 'https://infinite-waters-93089-7bd83e9457e8.herokuapp.com/',
  },
  {
    name: 'HealthTracker',
    image: './homeTiles/manufacturing.webp',
    stack: [
      { name: 'React', img: <FaReact /> },
      { name: 'Node.js', img: <FaNodeJs /> },
      { name: 'Express', img: <SiExpress /> },
      { name: 'MongoDB', img: <SiMongodb /> },
    ],
    description:
      'A web application to track daily health activities and calorie intake, integrating with various fitness APIs.',
    link: 'www.waterfall.finance',
  },
  {
    name: 'TechEvents',
    image: './homeTiles/agriculture.jpeg',
    stack: [
      { name: 'React', img: <FaReact /> },
      { name: 'Node.js', img: <FaNodeJs /> },
      { name: 'Express', img: <SiExpress /> },
      { name: 'MongoDB', img: <SiMongodb /> },
    ],
    description:
      'A portal for organizing and finding technology-related events, workshops, and meetups around the globe.',
    link: 'www.waterfall.finance',
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
  },
];
