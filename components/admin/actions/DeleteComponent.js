export default function DeleteComponent({ deleteHandler, cancelHandler }) {
  return (
    <div className="md:w-3/12 gap-3 text-sm z-20 bg-opacity-60 text-red-700 flex rounded py-1 justify-between items-center px-2">
      <p>Delete?</p>
      <div className="space-x-3 flex">
        <button
          onClick={cancelHandler}
          className="bg-green-200 text-green-600 px-3 py-1 rounded"
        >
          No
        </button>
        <button
          onClick={deleteHandler}
          className="bg-red-300 px-3 py-1 rounded"
        >
          Yes
        </button>
      </div>
    </div>
  );
}
