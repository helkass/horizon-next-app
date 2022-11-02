import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export const LayoutBtn = ({ children }) => {
  return (
    <div className="bg-amber-100 rounded py-2 px-2 gap-2 mdw-2/12 text-center justify-center md:flex md:flex-col-1 grid grid-cols-1">
      {children}
    </div>
  );
};

export const BtnEdit = ({ handleCLick }) => {
  return (
    <button
      onClick={handleCLick}
      className="bg-yellow-300 rounded-md h-max p-1 relative w-max mx-auto md:mx-0"
    >
      <AiFillEdit size={20} />
    </button>
  );
};

export const BtnDelete = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-red-500 text-white rounded-md h-max p-1 w-max mx-auto md:mx-0"
    >
      <AiFillDelete size={20} />
    </button>
  );
};
