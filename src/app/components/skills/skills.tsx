'use client';

import React, { useRef, useState } from 'react';
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

export default function Skills({ colorsSkills }: SkillsProps): JSX.Element {
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref2);
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
      body: 'Languages and fundamentals I use to build practical web and data tools.',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript />, rating: 'strong' },
        { name: 'TypeScript', icon: <SiTypescript />, rating: 'strong' },
        { name: 'Python', icon: <FaPython />, rating: 'comfortable' },
        {
          name: 'Visual Basic',
          icon: <SiVisualbasic />,
          rating: 'comfortable',
        },
        { name: 'Java', icon: <FaJava />, rating: 'building' },
      ],
      bgColor: color1,
      textColor: color2,
    },
    {
      name: 'Front-end Development',
      body: 'Interfaces for portfolio sites, dashboards, and full-stack apps.',
      skills: [
        { name: 'React', icon: <FaReact />, rating: 'strong' },
        { name: 'TailwindCSS', icon: <SiTailwindcss />, rating: 'strong' },
        { name: 'Bootstrap', icon: <FaBootstrap />, rating: 'comfortable' },
        { name: 'jQuery', icon: <SiJquery />, rating: 'comfortable' },
      ],
      bgColor: color2,
      textColor: color1,
    },
    {
      name: 'Back-end & Data Processing',
      body: 'APIs, persistence, and data processing behind business applications.',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, rating: 'strong' },
        { name: 'Express', icon: <SiExpress />, rating: 'strong' },
        { name: 'MongoDB', icon: <SiMongodb />, rating: 'strong' },
        { name: 'MySQL', icon: <SiMysql />, rating: 'comfortable' },
        { name: 'Kafka', icon: <SiApachekafka />, rating: 'building' },
      ],
      bgColor: color1,
      textColor: color2,
    },
    {
      name: 'Cloud, DevOps & Infrastructure',
      body: 'Deployment, version control, and infrastructure skills I am extending.',
      skills: [
        { name: 'AWS', icon: <FaAws />, rating: 'building' },
        { name: 'Terraform', icon: <SiTerraform />, rating: 'building' },
        { name: 'GitHub', icon: <FaGithub />, rating: 'strong' },
        { name: 'GitLab', icon: <FaGitlab />, rating: 'building' },
      ],
      bgColor: color2,
      textColor: color1,
    },
    {
      name: 'Database Management & Streaming',
      body: 'Structured data stores and analytics tooling for finance workflows.',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, rating: 'building' },
        { name: 'Snowflake', icon: <SiSnowflake />, rating: 'building' },
      ],
      bgColor: color1,
      textColor: color2,
    },
  ];

  function getRatingColor(rating: string) {
    switch (rating) {
      case 'proficient':
      case 'strong':
        return 'bg-green-500'; // Green for proficient
      case 'good':
      case 'comfortable':
        return 'bg-yellow-500'; // Yellow for good
      case 'learning':
      case 'building':
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
                    className="group relative mt-4 flex min-w-56 flex-col rounded-md bg-opacity-50 p-4"
                    style={{
                      backgroundColor: stack.bgColor,
                      color: stack.textColor,
                    }}
                  >
                    <h2
                      className="mt-8 border-b-2 text-xl"
                      style={{ borderColor: stack.textColor }}
                    >
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
                  Strong
                </button>
                <button className="h-8 rounded-md bg-yellow-500 bg-opacity-50 px-2">
                  Comfortable
                </button>
                <button className="h-8 rounded-md bg-red-500 bg-opacity-50 px-2">
                  Building
                </button>
              </div>
            </div>
            <Button
              message="Projects"
              target="projects"
              colors={colorsSkills}
            />
          </div>
        </div>
      </GridBackground>
    </div>
  );
}
