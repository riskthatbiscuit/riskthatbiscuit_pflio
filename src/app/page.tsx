// Overarching page order
'use client'
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

// Import components and Fira_Code as before

export default function Home() {
  const navbarRef = useRef(null); // Step 1: Create a ref for the Navbar
  const [navbarHeight, setNavbarHeight] = useState(0); // Step 1: State to store Navbar height
  
  useEffect(() => {
    // Step 2: Measure the Navbar height after it has been rendered
    const handleResize = () => {
      setNavbarHeight((navbarRef.current as unknown as HTMLElement)?.offsetHeight || 0);
    };
  
    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize); // Update on window resize
  
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className={`${fira.className}`} style={{ height: '100%' }}>
      <div ref={navbarRef}>
        <Navbar />
      </div>{' '}
      <div
        className="flex-grow snap-y snap-mandatory overflow-scroll mb-2"
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      >
        <Hero colorsHero={['#CCCCCC', '#F2F2F2', '#595959', '#7F7F7F']} />
        <Bio colorsBio={['#FCB4AB', '#F4978E', '#F08080', '#FFDAB9']} />
        <Skills colorsSkills={['#BEEF9E', '#A6C36F', '#1E352F', '#828C51']} />
        <Projects
          colorsProject={['#CAF0F8', '#90E0EF', '#03045E', '#0077B6']}
        />
        <Extra colorsExtra={['#FFE169', '#EDC531', '#805B10', '#C9A227']} />
      </div>
      {/* <Footer /> */}
    </main>
  );
}

// Major 1, Major2, Background, Line
// Light, Light, Dark, Medium