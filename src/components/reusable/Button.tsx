import { ReactNode } from 'react';

type Props = {
    title: string;
    tooltip?: ReactNode;
    onClick?: () => void;  
};

function Button({ title,onClick,tooltip }: Props) {
  return (
    <div className="relative inline-block">
    <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
      {title}
    </button>
    {tooltip && (
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white rounded-md text-xs opacity-0 pointer-events-none transition-opacity duration-300">
        {tooltip}
      </div>
    )}
  </div>
  );
}

export default Button;
