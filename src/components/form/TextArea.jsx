import React from 'react';
import { cn } from '../../lib/utils';

export const TextArea = ({ label, type, id, className, ...props }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="font-medium" htmlFor={crypto.randomUUID()}>
        {label}
      </label>
      <textarea
        className={cn(
          'h-10 p-2 bg-black bg-opacity-50 text-[#CCC] border border-[#6F7DFF29] border-opacity-100 focus-within:outline focus-visible:outline-white/40 focus:border-none rounded-md',
          className,
        )}
        type={type}
        {...props}
      />
    </div>
  );
};
