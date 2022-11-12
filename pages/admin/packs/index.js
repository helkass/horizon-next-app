import Layout from "../../../components/admin/Layout";
import AddCoffeePack from "../../../components/admin/actions/Coffeepacks/AddCoffeePack";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useQueryClient, useQuery } from "react-query";
import { Transition, Dialog } from "@headlessui/react";
import { deleteCoffeePack, getCoffeePacks } from "../../../libs/coffeePacks";

import Image from "next/image";
import { useState, Fragment } from "react";

// fake
import defaultImage from "../../../fakeData/img/defaultImage.jpg";

// show all product from DB
export default function CoffeePacks({ packs }) {
  // state for displaying toggle form data
  const [visible, setVisible] = useState(false);
  const { data } = useQuery("coffee_packs", getCoffeePacks);

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
        {data?.map((obj, i) => (
          <TableBody {...obj} key={i} />
        ))}
      </main>
    </Layout>
  );
}

function TableBody({ _id, title, img, desc, price, size }) {
  const [view, setView] = useState(false);
  const [packId, setPackId] = useState("");
  const queryclient = useQueryClient();

  const handleClick = (id) => {
    setView(!view);
    setPackId(id);
  };
  const onDelete = async () => {
    await deleteCoffeePack(packId);
    await queryclient.prefetchQuery("coffee_packs", getCoffeePacks);
    setView(!view);
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
            onClick={() => handleClick(_id)}
            className=" text-white rounded-md h-max w-max mx-auto md:mx-0"
          >
            <AiFillDelete size={20} color={"#ef4444"} />
          </button>
        </div>
      </div>
      <Transition appear show={view} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleClick}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900 border-b-2 border-amber-100"
                  >
                    Sure to delete?
                  </Dialog.Title>
                  {/* {modalContent.map((obj, i) => ( */}
                  <div className="flex justify-center gap-12 my-6">
                    <button
                      onClick={handleClick}
                      className="bg-green-200 text-green-600 px-4 py-2 rounded"
                    >
                      No
                    </button>
                    <button
                      onClick={onDelete}
                      className="bg-red-300 px-4 py-2 rounded"
                    >
                      Yes
                    </button>
                  </div>
                  {/* ))} */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
