'use client';

import Button from './button';
import GridBackground from './gridBackground';

interface HeroProps {
  colorsHero: string[];
}

export default function Hero({ colorsHero }: HeroProps): JSX.Element {
  return (
    <div id="hero">
      <GridBackground colors={colorsHero}>
        <div className="max-w-3xl animate-fade px-4 text-left animate-duration-[2000ms]">
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-700">
                Casey McGrath
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Risk manager turned software engineer.
              </h1>
              <p className="max-w-xl text-base leading-7 md:text-xl">
                I build financial, operational-risk, and data tools with the
                judgment of a decade spent inside global risk teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                message="View projects"
                target="projects"
                colors={colorsHero}
              />
              <Button message="My story" target="bio" colors={colorsHero} />
            </div>
          </div>
        </div>
      </GridBackground>
    </div>
  );
}
