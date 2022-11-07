import { BiBrush } from "react-icons/bi";
import Content from "../../../components/admin/Content";
import Layout from "../../../components/admin/Layout";
import Success from "../../../components/Success";
import { useState } from "react";
import Image from "next/image";
const URL = process.env.BASE_URL;

export const getStaticPaths = async () => {
  const res = await fetch(`${URL}api/products`).then((r) => r.json());

  return {
    paths: res.map((cup) => {
      return {
        // .toLowerCase().replace(/ /g, "-")
        params: { id: cup._id.toString() },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${URL}api/products/${params.id.replace(/\-/, "+")}`
  ).then((r) => r.json());
  return {
    props: { cup: res },
  };
};

const UpdateCup = ({ cup }) => {
  const [id, setId] = useState(cup._id);
  const [title, setCupName] = useState(cup.title);
  const [desc, setDesc] = useState(cup.desc);
  const [img, setImg] = useState(cup.img);
  const [medium, setMedium] = useState(cup.medium);
  const [large, setLarge] = useState(cup.large);

  const [success, setSuccess] = useState(false);

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
  const handleUpdate = (e) => {
    e.preventDefault();
    let items = { title, desc, img, medium, large };
    fetch("http://localhost:3000/api/products/?productId=" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    }).then((result) => {
      setSuccess(!success);
      result.json().then((res) => {
        console.warn(res);
      });
    });
  };
  return (
    <>
      <Layout>
        <Content>
          <div className="flex text-xl justify-center">
            <h1>Edit Cups</h1>
          </div>
          {success ? <Success message={"Data Updated"} /> : <></>}
          <form className="grid gap-2 my-3">
            <div>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
                placeholder="name"
                type="text"
                name="name"
                id="name"
                defaultValue={title}
                onChange={(e) => setCupName(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
                placeholder="description"
                type="text"
                name="desc"
                id="desc"
                defaultValue={desc}
                onChange={(e) => setDesc(e.target.value)}
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
                  defaultValue={medium}
                  onChange={(e) => setMedium(e.target.value)}
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
                  defaultValue={large}
                  onChange={(e) => setLarge(e.target.value)}
                />
              </div>
            </div>
            <label className="block">
              <Image
                src={img}
                width={90}
                height={90}
                objectFit="cover"
                alt={title}
              />
              <input
                type="file"
                onChange={handleImage}
                className="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-600 hover:file:bg-violet-100"
              />
            </label>
            <button
              onClick={handleUpdate}
              className="bg-yellow-200 mt-3 flex items-center hover:bg-yellow-400 px-4 py-1 rounded-md text-yellow-600 w-max"
            >
              Update product
              <span>
                <BiBrush className="px-1" size={24} />
              </span>
            </button>
          </form>
        </Content>
      </Layout>
    </>
  );
};

export default UpdateCup;
