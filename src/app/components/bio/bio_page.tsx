'use client';

import React, { useRef } from 'react';
import { useIsVisible } from '@/app/hooks/useIsVisible';

import GridBackground from '../gridBackground';
import Story from './story';
import StoryDropdowns from './dropdowns';
import Button from '../button';

interface BioProps {
  colorsBio: string[];
}

export default function Bio({colorsBio}:BioProps): JSX.Element {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref1);

  return (
    <div id="bio">
      <GridBackground colors={colorsBio}>
        <div
          ref={ref1}
          className={`${isVisible ? 'w-full animate-fade-left animate-duration-[2000ms] animate-once' : ''} h-full max-w-3xl snap-start flex-col px-2 md:mx-8 lg:flex-row`}
        >
          <div
            className="mt-20 flex flex-col text-xs md:text-base"
            style={{ height: 'calc(100% - 100px)' }}
          >
            <div className="flex h-1/6 flex-col justify-end ">
              <h1 className={`text-3xl font-bold h-min-full md:text-5xl`}>My Story</h1>{' '}
            </div>
            <div style={{ height: 'calc(100% - 100px)' }}>
              <Story />
              <StoryDropdowns colors={colorsBio} />
            </div>
            <Button
              message="Skills I'm learning"
              target="skills"
              colors={colorsBio}
            />
          </div>
        </div>
      </GridBackground>
    </div>
  );
}
