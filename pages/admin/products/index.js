import Layout from "../../../components/admin/Layout";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Loading } from "../../../components/Loading";
import { Bug } from "../../../components/Bug";
import { deleteAction } from "../../../redux/reducer";
import { deleteProduct, getProducts } from "../../../libs/products";

import Image from "next/image";
import { useQuery } from "react-query";

// fake
import defaultImage from "../../../fakeData/img/defaultImage.jpg";
import { useState } from "react";
import AddProducts from "../../../components/admin/AddProducts";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "react-query";
// show all product from DB
// cups
export default function Products() {
  const dispactch = useDispatch();
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryclient = useQueryClient();
  // state for displaying toggle form data
  const [addVisible, setAddVisible] = useState(false);
  // adding product
  const handleAdd = (e) => {
    e.preventDefault();
    setAddVisible(!addVisible);
  };

  const deleteHandler = async () => {
    if (deleteId) {
      await deleteProduct(deleteId);
      await queryclient.prefetchQuery("products", getProducts);
      await dispactch(deleteAction(null));
    }
  };
  const cancelHandler = async () => {
    await dispactch(deleteAction(null));
  };

  // call data from api
  // return all data from response
  const { isLoading, isError, data, error } = useQuery("products", getProducts);

  if (isError) return <Bug />;

  return (
    <Layout>
      <h1 className="text-center w-full my-3 text-lg font-semibold">
        All Product Cups
      </h1>
      <button
        onClick={handleAdd}
        className="bg-yellow-200 px-3 py-2 text-yellow-700 rounded-md my-1"
      >
        Add Product
      </button>
      {/* collapse */}
      {addVisible ? <AddProducts /> : <></>}
      {/* .................
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
        <div className="bg-amber-400 rounded py-1 w-2/12">
          <p>Prices</p>
        </div>
        <div className="bg-amber-400 rounded py-1 sm:px-1 md:px-3">
          <p>Action</p>
        </div>
      </div>
      {/* body */}
      <main className="mt-2 gap-3">
        {isLoading ? (
          <Loading />
        ) : (
          data.map((obj, i) => <TableBody {...obj} key={i} />)
        )}
      </main>
    </Layout>
  );
}

function TableBody({ _id, title, desc, img, medium, large }) {
  const dispactch = useDispatch();
  const onDelete = (e) => {
    e.preventDefault();
    dispactch(deleteAction(_id));
  };
  return (
    <>
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
        <div className="bg-amber-100 rounded py-1 w-2/12 sm:text-sm text-xs">
          <p>{medium || "unknown"}</p>
          <p>{large || "unknown"}</p>
        </div>
        {/* clicked action*/}
        <div className="bg-amber-100 rounded py-2 px-2 md:gap-3 gap-2 md:w-1/12 text-center justify-center md:flex md:flex-col-1 grid grid-cols-1">
          <a
            href={"/admin/products/" + _id.toString()}
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
    </>
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
