import Navbar from "../components/Navbar";
import { Loading } from "../components/Loading";
import { getGallerys } from "../libs/gallerys";
import { Transition, Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

import Image from "next/image";
import { useQuery } from "react-query";
import defaultImage from "../fakeData/img/defaultImage.jpg";
import { useState, Fragment } from "react";

// admin gallery set
export default function Galleries() {
  const { isLoading, isError, data, error } = useQuery(
    "galleries",
    getGallerys
  );

  if (isLoading) return <Loading />;
  if (isError) return <div>Galleries Error...!</div>;

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center pt-20 text-4xl bg-yellow-50 bg-opacity-60 h-56 font-flower">
        Galleries
      </div>
      <main className="grid md:grid-cols-4 max-h-36 grid-cols-2 sm:grid-cols-3 gap-2 pt-9 sm:px-12 px-4">
        {data.map((obj, i) => (
          <TableBody {...obj} key={i} />
        ))}
      </main>
    </>
  );
}
// { id, title, img, desc, writer } = props == destruct
function TableBody(props) {
  const [view, setView] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const handleClick = (props) => {
    setView(!view);
    setModalContent([props]);
  };
  return (
    <>
      <div
        onClick={() => handleClick(props)}
        className="bg-amber-50 rounded-md p-1 tracking-wide mt-3 cursor-pointer hover:scale-105 animate-pulse hover:animate-none"
      >
        <div className="w-full items-center flex justify-center">
          <Image
            width={160}
            height={170}
            objectFit="cover"
            src={props.img || defaultImage}
            className="mx-auto"
            alt={props.title}
          />
        </div>
        <p>{props.title || "unknown"}</p>
        {/* <p>{props.desc}</p> */}
        <p className="opacity-70 text-xs mt-3">
          Created by{" "}
          <span className="opacity-100">{props.writer || "unknown"}</span>
        </p>
      </div>
      {/* modal */}
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={handleClick}
                    className="absolute top-1 right-1 bg-red-200 rounded-full p-1 m-1"
                  >
                    <AiOutlineClose size={18} color="#f87171" />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900 border-b-2 border-amber-100"
                  >
                    Detail
                  </Dialog.Title>
                  {modalContent.map((obj, i) => (
                    <>
                      <div key={i} className="mt-4 text-gray-700">
                        <div className="w-8/12 flex  justify-center items-center">
                          <Image
                            height={180}
                            width={180}
                            objectFit="cover"
                            src={obj.img || defaultImage}
                            alt={obj.title || "unknown"}
                          />
                        </div>
                        <p className="font-semibold text-xl">{obj.title}</p>
                        <p>{obj.desc || "unknown"}</p>
                        <p className="text-xs text-opacity-70">
                          Writer by {obj.writer || "unknown"}
                        </p>
                      </div>
                    </>
                  ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
