const Container = ({ children }) => {
  return (
    <div className="relative w-full max-h-max items-center md:px-14 py-9 overflow-hidden sm:px-12 px-2 max-w-7xl">
      {children}
    </div>
  );
};

export default Container;
