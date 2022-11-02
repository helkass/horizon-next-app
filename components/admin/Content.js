const Content = ({ children }) => {
  return (
    <div className="md:w-5/6 w-full mr-2 justify-center relative rounded mt-4 text-amber-900 md:px-5 py-1">
      {children}
    </div>
  );
};

export default Content;
