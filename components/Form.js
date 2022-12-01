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
        className="focus:outline-none font-medium p-2 mt-1 rounded-md"
      />
    </>
  );
};

// url/checkout
export const InputCalculate = ({ qty, name, defaultValue }) => {
  let subTotal = qty * defaultValue;
  return (
    <div className="flex justify-between text-sm text-gray-500">
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

export const DefaultInput = ({ name, onChange, defaultValue, label }) => {
  return (
    <div className="grid w-full">
      <label className="text-gray-600">{label}</label>
      <input
        defaultValue={defaultValue}
        name={name}
        id={name}
        onChange={onChange}
        className="focus:outline-none w-full font-medium p-2 mt-1 border border-yellow-300 rounded-md"
      />
    </div>
  );
};
