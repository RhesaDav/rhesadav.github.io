import React, { ReactNode } from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

function Button({ title, ...props }: Props) {
  return (
    <div className="relative inline-block">
      <button {...props} className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
        {title}
      </button>
    </div>
  );
}

export default Button;
