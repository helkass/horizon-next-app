import Success from "../../components/Success";
import Bug from "../../components/Bug";
import axios from "axios";

import { useState, useReducer, useEffect } from "react";
import { BiPlus } from "react-icons/bi";

// hook mutation you can delete create update data
import { useQueryClient } from "react-query";
import { getProducts } from "../../libs/products";

// show all product from DB
const AddProducts = () => {
  // declare
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [medium, setMedium] = useState("");
  const [large, setLarge] = useState("");
  const [img, setImg] = useState("");

  // handle convert it in base64
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  // encode image to base 64
  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  const queryClient = useQueryClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { product } = await axios.post("/api/products", {
        title,
        desc,
        medium,
        large,
        img,
      });

      queryClient.prefetchQuery("products", getProducts);
      setTitle("");
      setDesc("");
      setImg("");
      setMedium("");
      setLarge("");
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////////
  // const [formData, setFormData] = useReducer(formReducer, {});
  // const queryClient = useQueryClient();
  // const addMutation = useMutation(addProduct, {
  //   onSuccess: () => {
  //     queryClient.prefetchQuery("products", getProducts);
  //   },
  // });

  ////////////////////////////////
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (Object.keys(formData).length == 0)
  //     return console.log("you dont have any data!");
  //   let { title, desc, prices, img } = formData;

  //   const model = {
  //     title,
  //     desc,
  //     prices,
  //     img,
  //   };

  //   addMutation.mutate(formData);
  //   console.log(formData);
  // };

  // if (addMutation.isLoading) return <div>Loading...</div>;
  // if (addMutation.isError) return <Bug message={addMutation.error.message} />;
  // if (addMutation.isSuccess) return <Success message={"Added Succcessfully"} />;

  return (
    <form className="grid gap-2 my-3 w-11/12">
      <div>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
          placeholder="title"
          type="text"
          name="title"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
          placeholder="description"
          type="text"
          name="desc"
          value={desc}
          id="desc"
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-3 items-center px-2">
        <label>700ml / Medium</label>
        <div className="flex items-center gap-2">
          <span>Rp.</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
            placeholder="example: 30000"
            type="text"
            name="medium"
            id="large"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-3 items-center px-2">
        <label>1000 ml / Large</label>
        <div className="flex items-center gap-2">
          <span>Rp.</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
            placeholder="example; 30000"
            type="text"
            name="large"
            id="large"
            value={large}
            onChange={(e) => setLarge(e.target.value)}
          />
        </div>
      </div>

      <label className="block">
        <input
          type="file"
          name="img"
          onChange={handleImage}
          className="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-600 hover:file:bg-violet-100"
        />
      </label>
      <button
        onClick={handleSubmit}
        className="bg-green-300 mt-3 flex items-center hover:bg-green-500 px-4 py-1 rounded-md text-green-700 w-max"
      >
        Add product
        <span>
          <BiPlus className="px-1" size={24} />
        </span>
      </button>
      {/*success added the data */}
      {/* {Object.keys(formData).length > 0 ? (
        <Success message="Data Upadated"></Success>
      ) : (
        <Bug message={"please input data!"} />
      )} */}
      <p className="opacity-70 text-gray-500">
        Note: If you input product again please click Add Product
        <span className="text-yellow-600"> yellow button</span>
      </p>
    </form>
  );
};

export default AddProducts;
