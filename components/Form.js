export const Form = ({ name, onChange }) => {
  return (
    <>
      <label value="Username" className="mt-1">
        {name}
        <span className="text-red-600 font-semibold">*</span>
      </label>
      <input
        onChange={onChange}
        type="text"
        name={name}
        className="focus:outline-none focus:border-yellow-200 focus:border-2 focus:ring-yellow-200 border-b font-medium p-1 mt-1 border-amber-900 border-opacity-60 border-l"
      />
    </>
  );
};

// url/checkout
export const InputCalculate = ({ qty, name, defaultValue }) => {
  let subTotal = qty * defaultValue;
  return (
    <div className="flex justify-between text-sm">
      <span>{name}</span>
      <div className="space-x-1">
        Rp.
        <input
          className="w-12 cursor-default outline-none"
          readOnly
          defaultValue={defaultValue}
          name={name}
        />{" "}
        <span>x</span>
        <span>{qty || 0}</span>
      </div>
      <span>Rp.{subTotal}</span>
    </div>
  );
};

export const InputRegister = ({ name, className, type }) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={name}>{name}</label>
        <input
          type={type}
          name={name}
          className={`${className} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-yellow-400 focus:shadow-outline`}
          required
        />
      </div>
    </>
  );
};
