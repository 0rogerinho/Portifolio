export const Tecnologic = ({ srcImg, altImg }) => {
  return (
    <div className="px-6 py-4 flex justify-center items-center  border border-[#011540] rounded-lg  md:px-9 md:py-6 lg:px-16 lg:py-12">
      <img
        className="block w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px] object-contain"
        src={srcImg}
        alt={altImg}
      />
    </div>
  );
};
