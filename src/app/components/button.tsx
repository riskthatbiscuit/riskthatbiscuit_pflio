import React from 'react';

interface ButtonProps {
  message: string;
  target: string;
  colors: Array<string>;
}

const Button: React.FC<ButtonProps> = ({ message, target, colors }) => {
  const scrollToSection = () => {
    const container = document.getElementById('page-scroll');
    const section = document.getElementById(target);

    if (container && section) {
      container.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className="z-10 my-2 h-10 w-fit rounded-md border px-4 text-sm font-semibold shadow-sm transition hover:brightness-95"
      style={{
        background: colors[0],
        color: colors[2],
        borderColor: colors[3],
      }}
    >
      {message}
    </button>
  );
};

export default Button;
