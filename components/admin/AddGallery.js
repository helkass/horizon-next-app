import axios from "axios";

import { useState } from "react";
import { BiPlus } from "react-icons/bi";

// hook mutation you can delete create update data
import { useQueryClient } from "react-query";
import { getGallerys } from "../../libs/gallerys";

// show all product from DB
const AddGallery = () => {
  // declare
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [writer, setWriter] = useState("");

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
      const { data } = await axios.post("/api/galleries", {
        title,
        desc,
        img,
        writer,
      });

      console.log(data);

      queryClient.prefetchQuery("galleries", getGallerys);
      setTitle("");
      setDesc("");
      setImg("");
      setWriter("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="grid gap-2 my-3">
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
      <label className="block">
        <input
          type="file"
          name="img"
          onChange={handleImage}
          className="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-600 hover:file:bg-violet-100"
        />
      </label>
      <div>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
          placeholder="title"
          type="text"
          name="writer"
          value={writer}
          id="writer"
          onChange={(e) => setWriter(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-300 mt-3 flex items-center hover:bg-green-500 px-4 py-1 rounded-md text-green-700 w-max"
      >
        Add photo
        <span>
          <BiPlus className="px-1" size={24} />
        </span>
      </button>
      <p className="opacity-70 text-gray-500">
        Note: If you input product again please click Add Product
        <span className="text-yellow-600"> yellow button</span>
      </p>
    </form>
  );
};

export default AddGallery;
