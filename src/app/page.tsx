// Overarching page order
'use client';
import Navbar from '../app/components/navbar';
import Hero from '../app/components/hero';
import Bio from './components/bio/bio_page';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects_page';
import Extra from '../app/components/extra';
import { Fira_Code } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';

const fira = Fira_Code({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`${fira.className} w-full`} style={{ height: '100dvh' }}>
        <div className="snap-y snap-mandatory overflow-scroll">
          <Hero colorsHero={['#CCCCCC', '#F2F2F2', '#595959', '#7F7F7F']} />
          <Bio colorsBio={['#FCB4AB', '#F4978E', '#F08080', '#FFDAB9']} />
          <Skills colorsSkills={['#BEEF9E', '#A6C36F', '#1E352F', '#828C51']} />
          <Projects
            colorsProject={['#CAF0F8', '#90E0EF', '#03045E', '#0077B6']}
          />
          <Extra colorsExtra={['#FFE169', '#EDC531', '#805B10', '#C9A227']} />
        </div>
      </main>
    </>
  );
}

// Major 1, Major2, Background, Line
// Light, Light, Dark, Medium
