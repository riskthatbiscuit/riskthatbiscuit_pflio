import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaBootstrap } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
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
}

// Projects array
export const Projects: Project[] = [
  {
    name: 'Waterfall Finance',
    image: './homeTiles/WaterfallFinance.png',
    stack: [
      {name: 'Typescript', img: <SiTypescript />},
      { name: 'React', img: <FaReact /> },
      { name: 'TailwindCSS', img: <SiTailwindcss /> },
    ],
    description:
      'A front-end website for a finance startup focusing on modern, responsive designs.',
    link: 'http://www.waterfall.finance',
  },
  {
    name: 'Eco Merch Store',
    image: './homeTiles/emobility.webp',
    stack: [
      { name: 'React', img: <FaReact /> },
      { name: 'Node.js', img: <FaNodeJs /> },
      { name: 'Express', img: <SiExpress /> },
      { name: 'MongoDB', img: <SiMongodb /> },
    ],
    description:
      'An e-commerce platform for eco-friendly merchandise, featuring a complete shopping cart and user profiles.',
    link: 'www.waterfall.finance',
  },
  {
    name: 'StudyBuddy',
    image: './homeTiles/Building.jpg',
    stack: [
      { name: 'React', img: <FaReact /> },
      { name: 'Node.js', img: <FaNodeJs /> },
      { name: 'Express', img: <SiExpress /> },
      { name: 'MongoDB', img: <SiMongodb /> },
    ],
    description:
      'A collaborative platform for students to create and share notes and resources for various subjects.',
    link: 'www.waterfall.finance',
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
