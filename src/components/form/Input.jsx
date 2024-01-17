import React from 'react';
import { cn } from '../../lib/utils';

export const Input = ({ label, type, id, className, ...props }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-lg font-medium" htmlFor={crypto.randomUUID()}>
        {label}
      </label>
      <input
        className={cn(
          'h-10 px-2 bg-black bg-opacity-50 text-[#CCC] border border-[#6F7DFF29] border-opacity-100 focus-within:outline focus-visible:outline-white/40 focus:border-none rounded-md md:h-[51px]',
          className,
        )}
        type={type}
        {...props}
      />
    </div>
  );
};
