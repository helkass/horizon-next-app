import Layout from "../../../components/admin/Layout";
import AddCoffeePack from "../../../components/admin/actions/Coffeepacks/AddCoffeePack";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "react-query";
import { deleteAction } from "../../../redux/reducer";
import { deleteCoffeePack, getCoffeePacks } from "../../../libs/coffeePacks";

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
  const dispactch = useDispatch();
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryclient = useQueryClient();
  // state for displaying toggle form data
  const [visible, setVisible] = useState(false);

  // adding product
  const handleAdd = (e) => {
    e.preventDefault();
    setVisible(visible ? false : true);
  };

  const deleteHandler = async () => {
    if (deleteId) {
      await deleteCoffeePack(deleteId);
      await queryclient.prefetchQuery("coffee_packs", getCoffeePacks);
      await dispactch(deleteAction(null));
    }
  };
  const cancelHandler = async () => {
    await dispactch(deleteAction(null));
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
      {deleteId ? DeleteComponent({ deleteHandler, cancelHandler }) : <></>}
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
  const dispactch = useDispatch();
  const onDelete = (e) => {
    e.preventDefault();
    dispactch(deleteAction(_id));
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
        <button
          onClick={onDelete}
          className=" text-white rounded-md h-max w-max mx-auto md:mx-0"
        >
          <AiFillDelete size={20} color={"#ef4444"} />
        </button>
      </div>
    </div>
  );
}

function DeleteComponent({ deleteHandler, cancelHandler }) {
  return (
    <div className="w-3/12 border-2 gap-3 z-20 bg-red-200 bg-opacity-60 text-red-700 absolute -translate-x-3/4 right-1/4 border-red-600 flex flex-col rounded py-4 justify-center items-center">
      <p>Confirm delete?</p>
      <div className="space-x-4">
        <button
          onClick={cancelHandler}
          className="bg-green-200 text-green-600 px-2 py-1 rounded"
        >
          No
        </button>
        <button
          onClick={deleteHandler}
          className="bg-red-300 px-2 py-1 rounded"
        >
          Yes
        </button>
      </div>
    </div>
  );
}
