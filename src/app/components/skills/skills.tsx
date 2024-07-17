'use client';

import React, { useRef, useState, ReactElement } from 'react';
import { useIsVisible } from '@/app/hooks/useIsVisible';
import GridBackground from '../gridBackground';
import Button from '../button';
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaBootstrap,
  FaGitlab,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiPostgresql,
  SiJquery,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMysql,
  SiApachekafka,
  SiTerraform,
  SiSnowflake,
  SiVisualbasic,
} from 'react-icons/si';

interface SkillsProps {
  colorsSkills: string[];
}


export default function Projects({ colorsSkills }: SkillsProps): JSX.Element {
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref2);
  const [currentStack, setCurrentStack] = useState(0);
  const color1 = colorsSkills[0]
  const color2 = colorsSkills[2]

  const stacks = [
    {
      name: 'Core Programming',
      body: 'Extensive experience in programming with a focus on backend and frontend.',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript />, rating: 'proficient' },
        { name: 'TypeScript', icon: <SiTypescript />, rating: 'proficient' },
        { name: 'Python', icon: <FaPython />, rating: 'good' },
        { name: 'VisualBasic', icon: <SiVisualbasic />, rating: 'good' },
        { name: 'Java', icon: <FaJava />, rating: 'learning' },
      ],
      bgColor: color1,
      textColor: color2,
    },
    {
      name: 'Front-end Development',
      body: 'Proficient in modern front-end technologies and frameworks, with project experience.',
      skills: [
        { name: 'React', icon: <FaReact />, rating: 'proficient' },
        { name: 'TailwindCSS', icon: <SiTailwindcss />, rating: 'proficient' },
        // { name: 'HTML5', icon: <FaHtml5 />, rating: 'proficient' },
        { name: 'Bootstrap', icon: <FaBootstrap />, rating: 'good' },
        { name: 'jQuery', icon: <SiJquery />, rating: 'good' },
      ],
      bgColor: color2,
      textColor: color1,
    },
    {
      name: 'Back-end & Data Processing',
      body: 'Building and managing back-end services and data pipelines.',
      skills: [
        { name: 'Node', icon: <FaNodeJs />, rating: 'good' },
        { name: 'Express', icon: <SiExpress />, rating: 'good' },
        { name: 'MongoDB', icon: <SiMongodb />, rating: 'proficient' },
        { name: 'MySQL', icon: <SiMysql />, rating: 'learning' },
        { name: 'Kafka', icon: <SiApachekafka />, rating: 'learning' },
      ],
      bgColor: color1,
      textColor: color2,
    },
    {
      name: 'Cloud, DevOps & Infrastructure',
      body: 'Skilled in cloud services, infrastructure as code, and version control systems.',
      skills: [
        { name: 'AWS', icon: <FaAws />, rating: 'proficient' },
        { name: 'Terraform', icon: <SiTerraform />, rating: 'good' },
        { name: 'GitHub', icon: <FaGithub />, rating: 'proficient' },
        { name: 'GitLab', icon: <FaGitlab />, rating: 'learning' },
      ],
      bgColor: color2,
      textColor: color1,
    },
    // {
    //   name: 'Software Development Practices',
    //   body: 'Deep understanding of software development lifecycle, from design to deployment.',
    //   skills: [
    //     {
    //       name: 'Microservices architecture',
    //       icon: null,
    //       rating: 'proficient',
    //     },
    //     { name: 'SDLC', icon: null, rating: 'proficient' },
    //     { name: 'Agile methodologies', icon: null, rating: 'good' },
    //   ],
    //   bgColor: 'bg-gray-300',
    //   textColor: 'text-neutral',
    // },
    {
      name: 'Database Management & Streaming',
      body: 'Handling large-scale data management and real-time data streaming.',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, rating: 'proficient' },
        { name: 'Snowflake', icon: <SiSnowflake />, rating: 'good' },
        { name: '', icon: '', rating: 'good' },
        { name: '', icon: '', rating: 'good' },
      ],
      bgColor: color1,
      textColor: color2,
    },
  ];

  function getRatingColor(rating: string) {
    switch (rating) {
      case 'proficient':
        return 'bg-green-500'; // Green for proficient
      case 'good':
        return 'bg-yellow-500'; // Yellow for good
      case 'learning':
        return 'bg-red-500'; // Red for learning
      default:
        return 'bg-gray-500'; // Default color
    }
  }
  const handleNextClick = () => {
    setCurrentStack((prevStack) => (prevStack + 1) % stacks.length);
  };

  const handlePrevClick = () => {
    setCurrentStack((prevStack) => {
      if (prevStack === 0) {
        return stacks.length - 1;
      } else {
        return prevStack - 1;
      }
    });
  };

  return (
    <div id="skills">
      <GridBackground colors={colorsSkills}>
        <div
          ref={ref2}
          className={`${isVisible ? 'w-full animate-fade-left animate-duration-[2000ms] animate-once' : ''} h-full max-w-3xl snap-start flex-col px-2 md:mx-8 lg:flex-row`}
        >
          <div
            className="mt-20 flex flex-col text-xs md:text-base"
            style={{ height: 'calc(100% - 100px)' }}
          >
            <div className="flex h-1/6 flex-col justify-end">
              <h1 className={`text-3xl font-bold md:text-5xl `}>Skills</h1>
              <p className="pt-2 md:pt-8">
                These are the skills I&apos;ve been developing
              </p>
            </div>
            <div style={{ height: 'calc(100% - 100px)' }}>
              <div className="relative mx-2 mt-4 flex h-5/6 justify-center overflow-hidden">
                {stacks.map((stack, index) => (
                  <div
                    key={stack.name}
                    className={`absolute flex h-5/6 w-full flex-col rounded-md p-4 `}
                    style={{
                      zIndex:
                        index === currentStack
                          ? 10
                          : index > currentStack
                            ? -index
                            : index,
                      transform: `translateY(${10 * index}px)`,
                      backgroundColor: stack.bgColor,
                      color: stack.textColor,
                    }}
                  >
                    <div onClick={handlePrevClick} className="-mt-8">
                      <h2 className="mt-8 border-b-2 border-neutral text-xl">
                        {stack.name}
                      </h2>
                      <p className="text-thin mt-2 ">{stack.body}</p>
                    </div>
                    <div onClick={handleNextClick} className="-mb-8 h-full">
                      <div className="skills-list mt-2 flex h-full flex-col justify-between pb-10 ">
                        {stack.skills.map((skill, index) => (
                          <div
                            key={`${stack.name}-${index}`}
                            className={`skill flex items-center justify-between rounded-md px-6 text-xl ${getRatingColor(skill.rating)} bg-opacity-50`}
                          >
                            <span className="text-sm">{skill.name}</span>
                            <span className="text-2xl">{skill.icon}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`mx-2 my-2 flex items-center justify-between gap-2 rounded-md bg-white bg-opacity-30 p-1 text-neutral ${isVisible ? 'animate-fade-up animate-delay-[2000ms] animate-duration-[2000ms] animate-once' : ''}`}
              >
                <p>Key:</p>
                <button className="h-8 rounded-md bg-green-500 bg-opacity-50 px-2">
                  I&apos;m great at
                </button>
                <button className="h-8 rounded-md bg-yellow-500 bg-opacity-50 px-2">
                  I&apos;m good at
                </button>
                <button className="h-8 rounded-md bg-red-500 bg-opacity-50 px-2">
                  I&apos;m learning
                </button>
              </div>
            </div>
            <Button
              message="Things I've built"
              target="projects"
              colors={colorsSkills}
            />
          </div>
        </div>
      </GridBackground>
    </div>
  );
}
