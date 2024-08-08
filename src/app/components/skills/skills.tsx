'use client';

import React, { useRef, useState, ReactElement, useEffect } from 'react';
import { useIsVisible } from '@/app/hooks/useIsVisible';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../button';
import GridBackground from '../gridBackground';
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
  const [showArrows, setShowArrows] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const color1 = colorsSkills[0];
  const color2 = colorsSkills[2];

  const scrollLeft = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      if (sliderWidth) {
        sliderRef.current?.scrollBy?.({
          left: -sliderWidth,
          behavior: 'smooth',
        });
      }
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

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
        { name: 'Node', icon: <FaNodeJs />, rating: 'proficient' },
        { name: 'Express', icon: <SiExpress />, rating: 'proficient' },
        { name: 'MongoDB', icon: <SiMongodb />, rating: 'proficient' },
        { name: 'MySQL', icon: <SiMysql />, rating: 'good' },
        { name: 'Kafka', icon: <SiApachekafka />, rating: 'learning' },
      ],
      bgColor: color1,
      textColor: color2,
    },
    {
      name: 'Cloud, DevOps & Infrastructure',
      body: 'Skilled in cloud services, infrastructure as code, and version control systems.',
      skills: [
        { name: 'AWS', icon: <FaAws />, rating: 'learning' },
        { name: 'Terraform', icon: <SiTerraform />, rating: 'learning' },
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
        { name: 'PostgreSQL', icon: <SiPostgresql />, rating: 'learning' },
        { name: 'Snowflake', icon: <SiSnowflake />, rating: 'learning' },
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

  return (
    <div
      id="skills"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <GridBackground colors={colorsSkills}>
        <div
          ref={ref2}
          className={`${isVisible ? 'w-full animate-fade-left animate-duration-[2000ms] animate-once' : ''} h-full max-w-sm snap-start flex-col px-2 md:mx-8 md:max-w-2xl lg:max-w-3xl lg:flex-row`}
        >
          <div
            className="mt-20 flex flex-col text-xs md:text-base"
            style={{ height: 'calc(100% - 100px)' }}
          >
            <div className="flex h-1/6 flex-col justify-end ">
              <h1 className={`text-3xl font-bold md:text-5xl `}>Skills</h1>
              <p className="pt-2 md:pt-8">
                These are the skills I&apos;ve been developing
              </p>
            </div>
            <div style={{ height: 'calc(100% - 100px)' }}>
              <div
                className="flex space-x-4 space-y-4 overflow-x-scroll"
                ref={sliderRef}
              >
                {stacks.map((stack, index) => (
                  <div
                    key={stack.name}
                    className="group relative mt-4 flex flex-col rounded-md min-w-56 bg-opacity-50 p-4"
                    style={{
                      backgroundColor: stack.bgColor,
                      color: stack.textColor,
                    }}
                  >
                    <h2 className="mt-8 border-b-2 text-xl" style={{borderColor: stack.textColor}}>
                      {stack.name}
                    </h2>
                    <p className="text-thin mt-2">{stack.body}</p>

                    <div className="skills-list mt-2 flex flex-col justify-between pb-10">
                      {stack.skills.map((skill, index) => (
                        <div
                          key={`${stack.name}-${index}`}
                          className={`skill my-1 flex items-center justify-between rounded-md px-6 text-xl ${getRatingColor(skill.rating)} bg-opacity-50`}
                        >
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-2xl">{skill.icon}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {showArrows && (
                <>
                  <button
                    className="absolute left-5 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75"
                    onClick={scrollLeft}
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    className="absolute right-5 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75"
                    onClick={scrollRight}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <div className="mx-2 my-2 flex items-center justify-between gap-2 rounded-md bg-white bg-opacity-30 p-1 text-neutral">
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
              message="Whats next?"
              target="projects"
              colors={colorsSkills}
            />
          </div>
        </div>
      </GridBackground>
    </div>
  );
}
