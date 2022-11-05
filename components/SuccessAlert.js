import { AiOutlineCheck } from "react-icons/ai";

export const SuccessAlert = () => {
  return (
    <div class="bg-green-50 border-b w-72 rounded-md absolute z-70 border-green-400 text-green-800 text-sm p-4 flex justify-between">
      <div>
        <div class="flex items-center">
          <AiOutlineCheck />
          <p>
            <span class="font-bold">Success:</span>
            Add to cart
          </p>
        </div>
      </div>
      <div>
        <AiOutlineCheck />
      </div>
    </div>
  );
};
