export const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-dashed border-yellow-400 border-4 rounded-full"
        role="status"
      ></div>
    </div>
  );
};
