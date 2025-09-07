const Tag = ({ children, className = "", ...props }) => {
  return (
    <span
      className={`${className} text-black capitalize font-medium md:text-[1.2rem]`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
