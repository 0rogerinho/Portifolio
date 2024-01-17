export const BaseLayout = ({ children, className }) => {
  return (
    <div className={`w-full px-[5%] xl:px-[8%] 2xl:px-[20%] ${className}`}>
      {children}
    </div>
  );
};
