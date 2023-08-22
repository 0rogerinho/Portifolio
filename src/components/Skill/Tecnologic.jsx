export const Tecnologic = ({ srcImg }) => {
  return (
    <div className=" min-w-[100px] h-[80px] md:h-[100px] lg:h-[150px] md w-[15%] flex justify-center items-center border border-[#011540] rounded-lg  ">
      <img
        className="block w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px] object-contain hover:scale-125 cursor-pointer transition-all duration-200"
        src={srcImg}
      />
    </div>
  );
};
//px-6 py-4 md:px-9 md:py-6 lg:px-16 lg:py-11 xl:px-[75px] xl:py-12  2xl:px-16 2xl:py-14
