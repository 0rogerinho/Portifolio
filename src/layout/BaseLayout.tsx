// Libs
import { cn } from '../lib/utils';
// Types
import { IBaseLayout } from './@types';

export const BaseLayout = ({ children, className }: IBaseLayout) => {
  return (
    <div className={cn(`container px-[5%] xl:px-[6%] m-auto`, className)}>
      {children}
    </div>
  );
};
