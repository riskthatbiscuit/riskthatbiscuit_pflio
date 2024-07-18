'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface GridBackgroundProps {
  colors: string[];
  children: React.ReactNode;
}

export default function GridBackground({
  colors,
  children,
}: GridBackgroundProps): JSX.Element {
  const numSquaresX = 20;
  const numSquaresY = 10;
  const probability1 = 0.1;
  const probability2 = 0.2;
  const id = `gridPattern-${colors[0]}`

  const intervalTime = 1000;
  const [gridSize, setGridSize] = useState(5000);
  const [fillColors, setFillColors] = useState<string[]>(
    new Array(numSquaresX * numSquaresY).fill(colors[2])
  );

  // Generate a unique pattern ID for each instance
  // const patternId = `gridPattern-${Math.random().toString(36).substr(2, 9)}`;

  // Function to update shaded squares and fill colors
  const updateShadedSquares = useCallback(() => {
    const newShadedSquares1: number[] = [];
    const newShadedSquares2: number[] = [];

    for (let i = 0; i < numSquaresX * numSquaresY; i++) {
      if (Math.random() < probability1) {
        newShadedSquares1.push(i);
      }
      if (Math.random() < probability2) {
        newShadedSquares2.push(i);
      }
    }

    setFillColors(
      fillColors.map((color, index) =>
        newShadedSquares1.includes(index)
          ? colors[0]
          : newShadedSquares2.includes(index)
            ? colors[1]
            : colors[2]
      )
    );
  }, [colors, fillColors]);

  
  // Initialize and set interval on component mount
  useEffect(() => {
    const handleResize = () => {
      const newSize =
      window.innerWidth > 900 ? 200 : window.innerWidth > 400 ? 100 : 50;
      setGridSize(newSize);
    };
    
    handleResize();

    const intervalId = setInterval(() => {
      handleResize();
      updateShadedSquares();
    }, intervalTime);

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateShadedSquares, colors]);

  return (
    <div className="hero relative h-screen snap-center overflow-hidden">
      <div className="absolute inset-0">
        <svg className="z-0 h-full w-full opacity-50" aria-hidden="true">
          <defs>
            <pattern
              id={id}
              x="0"
              y="0"
              width={gridSize * numSquaresX}
              height={gridSize * numSquaresY}
              patternUnits="userSpaceOnUse"
            >
              {Array.from({ length: numSquaresX * numSquaresY }).map(
                (_, index) => (
                  <rect
                    key={index}
                    x={(index % numSquaresX) * gridSize}
                    y={Math.floor(index / numSquaresX) * gridSize}
                    width={gridSize}
                    height={gridSize}
                    stroke={colors[3]}
                    fill={fillColors[index]}
                  />
                )
              )}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
      </div>
      {children}
    </div>
  );
}
