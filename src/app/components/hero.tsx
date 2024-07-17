'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useIsVisible } from '@/app/hooks/useIsVisible';
import Button from './button';
import GridBackground from './gridBackground';

interface HeroProps {
  colorsHero: string[];
}

export default function Hero({ colorsHero }: HeroProps): JSX.Element {
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [text, setText] = useState('Risk Manager');
  const toRotate = ['Risk Manager', 'Software Engineer'];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const period = 2000;

  useEffect(() => {
    if (!isFinished) {
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => clearInterval(ticker);
    }
  }, [text, isDeleting, delta, isFinished]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300 - Math.random() * 100);
    } else if (!isDeleting && updatedText === fullText) {
      if (i === 0) {
        setTimeout(() => {
          setIsDeleting(true);
          setDelta(50);
        }, period);
      }
    } else if (!isDeleting && i === 1 && updatedText === fullText) {
      setIsFinished(true);
    }
  };

  return (
    <div id="hero">
      <GridBackground colors={colorsHero}>
        <div
          className={`animate-fade px-2 text-center animate-duration-[2000ms] max-w-3xl`}
        >
          <div className="flex max-w-md flex-col gap-4">
            <div className="h-36 text-left">
              <h1 className="text-4xl">{`Hi I'm Casey,`}</h1>
              <span className="text-4xl">a {text}</span>
            </div>
            <div>
              <Button message="About Me" target="bio" colors={colorsHero} />
            </div>
          </div>
        </div>
      </GridBackground>
    </div>
  );
}
