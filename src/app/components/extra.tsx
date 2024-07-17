'use client'

import GridBackground from './gridBackground';
import Button from './button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface ExtraProps {
  colorsExtra: string[];
}

export default function Hero({ colorsExtra }: ExtraProps): JSX.Element {
  const colors = colorsExtra

    const handleContactClick = () => {
      location.href = 'mailto:caseymcgrath@riskthatbiscuit.com';
    };

  return (
    <div id="extra">
      <GridBackground colors={colorsExtra}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">What&apos;s next?</h1>
            <p className="mb-5">
              Reach out if you want to direct my next piece of work!
            </p>
            <div className="flex justify-center gap-4 align-middle text-4xl ">
              <a
                href="https://www.linkedin.com/in/caseybmcgrath"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/riskthatbiscuit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <button
              className="btn btn-neutral btn-active btn-sm z-10 mx-auto my-4 h-8 w-fit text-xs font-thin"
              style={{
                background: colors[0],
                color: colors[2],
                borderColor: colors[3],
              }}
              onClick={handleContactClick}
            >
              Contact
            </button>
          </div>
        </div>
      </GridBackground>
    </div>
  );
}
