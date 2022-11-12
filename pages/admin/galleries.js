import Layout from "../../components/admin/Layout";
import { AiFillDelete } from "react-icons/ai";
import { Loading } from "../../components/Loading";
import AddGallery from "../../components/admin/AddGallery";
import { getGallerys, deleteGallery } from "../../libs/gallerys";
import { Transition, Dialog } from "@headlessui/react";

import Image from "next/image";
import { useState, Fragment } from "react";
import { useQuery, useQueryClient } from "react-query";
import defaultImage from "../../fakeData/img/defaultImage.jpg";

// admin gallery set
export default function Galleries() {
  const [visible, setVisible] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setVisible(visible ? false : true);
  };

  const { isLoading, isError, data, error } = useQuery(
    "galleries",
    getGallerys
  );

  if (isError) return <div>Products Error...!</div>;

  return (
    <Layout>
      <div className="flex justify-between">
        <button
          onClick={handleAdd}
          className="bg-yellow-200 px-3 py-2 text-yellow-700 rounded-md my-1"
        >
          Add Photos
        </button>
      </div>
      {visible ? <AddGallery /> : <></>}
      <main className="grid md:grid-cols-4 max-h-36 grid-cols-2 sm:grid-cols-3 gap-2">
        {isLoading ? (
          <Loading />
        ) : (
          data.map((obj, i) => <TableBody {...obj} key={i} />)
        )}
      </main>
    </Layout>
  );
}

function TableBody({ _id, title, img, desc, writer }) {
  const [view, setView] = useState(false);
  const [galleryId, setGalleryId] = useState("");
  const queryclient = useQueryClient();

  const handleClick = (id) => {
    setView(!view);
    setGalleryId(id);
  };
  const onDelete = async () => {
    await deleteGallery(galleryId);
    await queryclient.prefetchQuery("galleries", getGallerys);
    setView(!view);
  };
  return (
    <>
      <div className="bg-amber-50 rounded-md p-1 text-xs lg:text-sm tracking-wide">
        <div className="w-full items-center flex justify-center py-1">
          <Image
            width={160}
            height={170}
            objectFit="cover"
            src={img || defaultImage}
            className="mx-auto"
            alt={title}
          />
        </div>
        <p>{title || "unknown"}</p>
        <p>{desc || "unknown"}</p>
        <p className="opacity-70 text-xs mt-3">
          Created by {writer || "unknown"}
        </p>
        <div className="flex justify-end m-3 gap-2">
          <button
            onClick={() => handleClick(_id)}
            className="bg-red-500 text-white rounded-md h-max p-1 w-max mx-auto md:mx-0"
          >
            <AiFillDelete size={20} />
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
