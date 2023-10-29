export const Tecnologic = ({ skill, srcImg }) => {
  return (
    <div className=" min-w-[100px]  my-2 md:mr-8 flex flex-col justify-center items-center">
      <img
        className="block w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] object-contain hover:scale-125 transition-all duration-200"
        src={srcImg}
      />
      <p className="tracking-widest font-semibold text-[10px] md:text-xs">
        {skill}
      </p>
    </div>
  );
};
//px-6 py-4 md:px-9 md:py-6 lg:px-16 lg:py-11 xl:px-[75px] xl:py-12  2xl:px-16 2xl:py-14
