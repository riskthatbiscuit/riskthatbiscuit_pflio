'use client';

import React, { useRef } from 'react';
import { useIsVisible } from '@/app/hooks/useIsVisible';
import Button from '../button';
import ProjectsDisplay from './project_cards';
import GridBackground from '../gridBackground';

interface ProjectProps {
  colorsProject: string[];
}

export default function Projects({colorsProject}:ProjectProps): JSX.Element {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref1);
  return (
    <div id="projects">
      <GridBackground colors={colorsProject}>
        <div
          ref={ref1}
          className={`${isVisible ? 'w-full animate-fade-left animate-duration-[2000ms] animate-once' : ''} h-full max-w-3xl snap-start flex-col px-2 md:mx-8 lg:flex-row`}
        >
          <div
            className="mt-20 flex flex-col text-xs md:text-base"
            style={{ height: 'calc(100% - 100px)' }}
          >
            <div className="flex h-1/6 flex-col justify-end">
              <h1 className={`text-3xl font-bold md:text-5xl `}>My Projects</h1>
              <p className="pt-2 md:pt-8">
                These are the some things I&apos;ve built
              </p>
            </div>
            <div style={{ height: 'calc(100% - 170px)' }}>
              <div className="flex flex-col max-h-full">
                <ProjectsDisplay colors={colorsProject} />
              </div>
            </div>
            <Button
              message="Whats next?"
              target="extra"
              colors={colorsProject}
            />
          </div>
        </div>
      </GridBackground>
    </div>
  );
}
