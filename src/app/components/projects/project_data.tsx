import React from 'react';
import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import {
  SiDjango,
  SiExpress,
  SiHandlebarsdotjs,
  SiHeroku,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

interface StackItem {
  name: string;
  img: JSX.Element;
}

export interface Project {
  name: string;
  image: string;
  stack: StackItem[];
  description: string;
  link: string;
  repo?: string;
  status?: string;
}

export const Projects: Project[] = [
  {
    name: 'Tegro Partners',
    image: '/homeTiles/TegroPartners.png',
    stack: [
      { name: 'Typescript', img: <SiTypescript /> },
      { name: 'React', img: <FaReact /> },
      { name: 'TailwindCSS', img: <SiTailwindcss /> },
    ],
    description:
      'Client-driven front-end website for a finance startup, focused on clear positioning, responsive layout, and a polished first impression.',
    link: 'https://www.tegro.partners',
  },
  {
    name: 'Tech Talent',
    image: '/homeTiles/tech_talent.png',
    stack: [
      { name: 'MySQL', img: <SiMysql /> },
      { name: 'Handlebars', img: <SiHandlebarsdotjs /> },
      { name: 'Express', img: <SiExpress /> },
      { name: 'Heroku', img: <SiHeroku /> },
    ],
    description:
      'Full-stack job-search application where users can browse developer roles, save listings, update application status, and add notes.',
    link: 'https://tech-talent1-4df2fd0f5e90.herokuapp.com/',
    repo: 'https://github.com/riskthatbiscuit/tech-talent',
  },
  {
    name: 'Employee Tracker',
    image: '/homeTiles/EmployeeTracker.png',
    stack: [
      { name: 'React', img: <FaReact /> },
      { name: 'Node.js', img: <FaNodeJs /> },
      { name: 'Express', img: <SiExpress /> },
      { name: 'MySQL', img: <SiMysql /> },
      { name: 'TailwindCSS', img: <SiTailwindcss /> },
    ],
    description:
      'RESTful employee-management app for maintaining employee, role, and department data through a React interface and Express/MySQL API.',
    link: 'https://infinite-waters-93089-7bd83e9457e8.herokuapp.com/',
    repo: 'https://github.com/riskthatbiscuit/Employee_tracker',
  },
  {
    name: 'Texas Holdem Calculator',
    image: '/homeTiles/Cards.jpg',
    stack: [
      { name: 'Python', img: <FaPython /> },
      { name: 'MySQL', img: <SiMysql /> },
    ],
    description:
      'Poker odds calculator exploring card simulation, probability, and decision support from changing table/player inputs.',
    link: '',
    status: 'Prototype',
  },
  {
    name: 'Op Risk Dashboard',
    image: '/homeTiles/manufacturing.webp',
    stack: [
      { name: 'MongoDB', img: <SiMongodb /> },
      { name: 'React', img: <FaReact /> },
      { name: 'TailwindCSS', img: <SiTailwindcss /> },
      { name: 'Node.js', img: <FaNodeJs /> },
      { name: 'Express', img: <SiExpress /> },
    ],
    description:
      'Operational-risk dashboard for tracking events, controls, and organizational impact through a clean full-stack interface.',
    link: 'https://op-risk-dashboard-git-main-riskthatbiscuits-projects.vercel.app/',
    repo: 'https://github.com/riskthatbiscuit/opRiskDashboard',
    status: 'In Development',
  },
  {
    name: 'Waterfall Finance',
    image: '/homeTiles/WaterfallFinance.png',
    stack: [
      { name: 'Python', img: <FaPython /> },
      { name: 'Django', img: <SiDjango /> },
      { name: 'React', img: <FaReact /> },
      { name: 'MongoDB', img: <SiMongodb /> },
    ],
    description:
      'Personal finance dashboard concept with portfolio analytics and Value at Risk calculations for asset-level risk visibility.',
    link: 'https://www.waterfall.finance',
    status: 'In Development',
  },
];
