import React from 'react';

interface ButtonProps {
  message: string;
  target: string;
  colors: Array<string>;
}

const Button: React.FC<ButtonProps> = ({ message, target, colors }) => {
  return (
    <button
      onClick={() => {
        const skills = document.getElementById(target);
        if (skills) {
          skills.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'center',
          });
        }
      }}
      className="btn z-10 btn-neutral h-8 btn-active btn-sm mx-auto mt-2 mb-2 w-fit text-xs font-thin"
      style={{background: colors[0], color:colors[2], border:colors[3]}}
    >
      {message}
    </button>
  );
};

export default Button;
