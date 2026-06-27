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
