'use client';

import Navbar from '../app/components/navbar';
import Hero from '../app/components/hero';
import Bio from './components/bio/bio_page';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects_page';
import Extra from '../app/components/extra';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <div
          className="snap-y snap-mandatory overflow-scroll"
          style={{ height: '100dvh' }}
        >
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
