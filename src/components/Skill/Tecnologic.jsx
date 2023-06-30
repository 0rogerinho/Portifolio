import React from 'react';

export const Tecnologic = ({ srcImg, altImg }) => {
  return (
    <div className="w-[4.125rem] h-[3.1875rem] md:w-[7.1875rem] md:h-[5.5625rem] lg:w-40 lg:h-24 xl:w-[194px] xl:h-[149px] flex justify-center items-center  border border-[#011540] rounded-lg xl:rounded-[2.375rem]">
      <img
        className="block w-[30px] h-[30px] xl:w-auto xl:h-auto"
        src={srcImg}
        alt={altImg}
      />
    </div>
  );
};
