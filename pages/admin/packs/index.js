import Layout from "../../../components/admin/Layout";
import AddCoffeePack from "../../../components/admin/actions/Coffeepacks/AddCoffeePack";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import Image from "next/image";
import { useState } from "react";

// fake
import defaultImage from "../../../fakeData/img/defaultImage.jpg";

const URL = process.env.BASE_URL;
export async function getStaticProps() {
  const res = await fetch(`${URL}api/coffee_packs`);
  const data = await res.json();

  return {
    props: { packs: data },
  };
}

// show all product from DB
export default function CoffeePacks({ packs }) {
  // state for displaying toggle form data
  const [visible, setVisible] = useState(false);

  // adding product
  const handleAdd = (e) => {
    e.preventDefault();
    setVisible(visible ? false : true);
  };

  return (
    <Layout>
      <h1 className="text-center w-full my-3 text-lg font-semibold">
        All Coffee Packs
      </h1>
      <button
        onClick={handleAdd}
        className="bg-yellow-200 px-3 py-1 text-sm text-yellow-700 rounded-md my-1"
      >
        Add Coffee
      </button>
      {/* conditional between update and add */}
      {visible ? <AddCoffeePack /> : <></>}
      {/* ..................
        ...............
        ............. */}
      {/* head */}
      <div className="w-full sm:h-9  rounded flex flex-cols-6 gap-1 font-semibold text-center text-xs sm:text-sm md:text-md">
        <div className="bg-amber-400 rounded py-1 w-2/12">
          <p>Image</p>
        </div>
        <div className="bg-amber-400 rounded py-1 w-3/12">
          <p>title</p>
        </div>
        <div className="bg-amber-400 rounded py-1 w-4/12">
          <p>Desc</p>
        </div>
        <div className="bg-amber-400 rounded py-1 w-1/12">
          <p>Size</p>
        </div>
        <div className="bg-amber-400 rounded py-1 w-2/12">
          <p>Price Rp</p>
        </div>
        <div className="bg-amber-400 rounded py-1 w-1/12">
          <p>Act</p>
        </div>
      </div>
      {/* body */}
      <main className="mt-2 gap-3">
        {packs?.map((obj, i) => (
          <TableBody {...obj} key={i} />
        ))}
      </main>
    </Layout>
  );
}

function TableBody({ _id, title, img, desc, price, size }) {
  const onUpdate = () => {
    console.log();
  };

  return (
    <div className="w-full text-xs sm:text-sm md:text-md max-h-24 rounded flex flex-cols-6 gap-1 mt-1 text-center">
      <div className="bg-amber-100 rounded py-1 w-2/12">
        <div className="objeect-cover flex mx-auto self-center">
          <Image
            src={img || defaultImage}
            alt={title || "unknown"}
            height={80}
            width={80}
            objectFit="cover"
            className="mx-auto"
          />
        </div>
      </div>
      <div className="bg-amber-100 rounded flex justify-center py-1 w-3/12">
        <p>{title || "unknown"}</p>
      </div>
      <div className="bg-amber-100 sm:text-sm text-xs rounded py-1 w-4/12">
        <p>{desc || "unknown"}</p>
      </div>
      <div className="bg-amber-100 rounded py-1 w-1/12 sm:text-sm text-xs">
        <p>{size || "unknown"}</p>
      </div>
      <div className="bg-amber-100 rounded py-1 w-2/12 sm:text-sm text-xs">
        <p>{price || "unknown"}</p>
      </div>
      {/* clicked action*/}
      <div className="bg-amber-100 rounded py-2 px-2 md:gap-3 gap-2 md:w-1/12 text-center justify-center md:flex md:flex-col-1 grid grid-cols-1">
        <a
          href={"/admin/packs/" + _id.toString()}
          className="rounded-md h-max relative w-max mx-auto md:mx-0"
        >
          <AiFillEdit size={20} color={"#eab308"} />
        </a>
        <button className=" text-white rounded-md h-max w-max mx-auto md:mx-0">
          <AiFillDelete size={20} color={"#ef4444"} />
        </button>
      </div>
    </div>
  );
}
