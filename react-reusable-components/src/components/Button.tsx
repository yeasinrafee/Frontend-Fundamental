import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import cn from '../utils/cn';

// `bg-purple-500 px-3 py-2 rounded-md ${className} ${
//             variant == 'outline' ? 'border border-purple-500 bg-opacity-10' : ''
//           }`

const Button = ({ className, outline }) => {
  return (
    <button
      className={cn(
        'bg-purple-500 px-3 py-2 rounded-md',
        { 'border border-purple-500 bg-opacity-10': outline },
        className
      )}
    >
      Click
    </button>
  );
};

export default Button;
