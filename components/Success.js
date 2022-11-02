import { BiCheck } from "react-icons/bi";

export default function Success({ message }) {
  return (
    <div className="container success mx-auto">
      <div className="flex relative justify-center mx-auto border bg-green-100 border-green-400 text-green-600 rounded-md md:w-3/6 w-4/6 my-4 text-md py-2 text-center">
        {message}
        <BiCheck size={24} color={"#15803d"} />
      </div>
    </div>
  );
}
