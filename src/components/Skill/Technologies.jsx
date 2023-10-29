export const Technologies = ({ skill, srcImg }) => {
  return (
    <div className=" min-w-[100px]  my-2 md:mr-8 flex md:flex-col justify-center items-center">
      <img
        className="block w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] object-contain hover:scale-125 transition-all duration-200"
        src={srcImg}
      />
      <p className=" tracking-widest font-semibold text-[.625rem] md:text-xs">
        {skill}
      </p>
    </div>
  );
};
