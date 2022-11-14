import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../../../components/admin/Header";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import defaultImage from "../../../fakeData/img/defaultImage.jpg";
import dynamic from "next/dynamic";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// show all product from DB
const AddBlog = () => {
  // declare
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [writer, setWriter] = useState("");
  const [img, setImg] = useState("");

  const router = useRouter();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/blogs", {
        title,
        article,
        writer,
        img,
      });
      router.push("/admin/blog");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <section className="sm:w-11/12 flex flex-col justify-center items-center mx-auto">
        <div className="font-flower my-10 text-2xl">
          <h2>Write Your Article</h2>
        </div>
        <form className="flex flex-col gap-4 my-3 w-11/12">
          {/* photo */}
          <div className="w-10/12 mx-auto md:mx-0 gap-2 flex flex-col md:w-full">
            <div className="mx-auto">
              <Image
                src={img || defaultImage}
                alt="preview"
                // width={400}
                height={400}
                objectFit="cover"
              />
            </div>
            <label className="block">
              <input
                type="file"
                name="img"
                onChange={handleImage}
                className="block text-sm cursor-pointer text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-600 hover:file:bg-violet-100"
              />
            </label>
          </div>
          {/* title */}
          <div className="flex items-center gap-1">
            <label>
              <AiOutlinePlusCircle size={25} color="#d1d5db" />
            </label>
            <input
              className="placeholder:italic sm:w-5/12 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
              placeholder="title"
              type="text"
              name="title"
              value={title}
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* writer */}
          <div className="flex items-center gap-1">
            <label>
              <AiOutlinePlusCircle size={25} color="#d1d5db" />
            </label>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
              placeholder="writer"
              type="text"
              name="writer"
              value={writer}
              id="writer"
              onChange={(e) => setWriter(e.target.value)}
            />
          </div>
          {/* article */}
          <ReactQuill
            theme="snow"
            modules={AddBlog.modules}
            formats={AddBlog.formats}
            value={article}
            onChange={setArticle}
            placeholder="write your ideas..."
            className="min-h-[330px]"
          />
          <button
            onClick={handleSubmit}
            className="bg-green-300 my-5 flex items-center self-end hover:bg-green-500 px-4 py-2 rounded-md text-green-700 w-max"
          >
            Add Article
            <span>
              <BiPlus className="px-1" size={24} />
            </span>
          </button>
        </form>
      </section>
    </>
  );
};

AddBlog.modules = {
  toolbar: [
    [{ heder: "1" }, { header: "2" }, { header: "3,4,5,6" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};

AddBlog.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];

export default AddBlog;
