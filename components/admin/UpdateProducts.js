import Success from "../../components/Success";
import Bug from "../../components/Bug";

import { useState, useReducer } from "react";
import { BiBrush } from "react-icons/bi";

// fakeda

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

// show all product from DB
const UpdateProducts = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="grid gap-2 my-3">
      <div>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
          placeholder="name"
          type="text"
          name="name"
          id="name"
          onChange={setFormData}
        />
      </div>
      <div>
        <textarea
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
          placeholder="description"
          type="text"
          name="desc"
          id="desc"
          onChange={setFormData}
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-3 items-center px-2">
        <label>700 ml</label>
        <div className="flex items-center gap-2">
          <span>Rp.</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
            placeholder="price"
            type="text"
            name="700ml"
            id="700ml"
            onChange={setFormData}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-3 items-center px-2">
        <label>1000 ml</label>
        <div className="flex items-center gap-2">
          <span>Rp.</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
            placeholder="price"
            type="text"
            name="1000ml"
            id="1000ml"
            onChange={setFormData}
          />
        </div>
      </div>
      <label className="block">
        <input
          type="file"
          onChange={setFormData}
          className="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-600 hover:file:bg-violet-100"
        />
      </label>
      <button
        onClick={handleSubmit}
        className="bg-yellow-200 mt-3 flex items-center hover:bg-yellow-400 px-4 py-1 rounded-md text-yellow-600 w-max"
      >
        Update product
        <span>
          <BiBrush className="px-1" size={24} />
        </span>
      </button>
      {/*success added the data */}
      {Object.keys(formData).length > 0 ? (
        <Success message="Data Upadated"></Success>
      ) : (
        <Bug message={"please input data!"} />
      )}
    </form>
  );
};

export default UpdateProducts;
