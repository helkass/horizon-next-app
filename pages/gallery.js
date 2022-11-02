import { useState, Fragment } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { AiOutlineClose } from "react-icons/ai";
import { Menu, Transition, Dialog } from "@headlessui/react";
import data from "../fakeData/galleries.json";

import produk from "../fakeData/img/produk.jpg";
import { getGallerys } from "../libs/gallerys";

const GalleryPage = () => {
  const [modalContent, setModalContent] = useState([]);
  const [view, setView] = useState(false);
  const handleClick = ({ img, id, title, desc, writer }) => {
    setView(!view);
    setModalContent([{ img, id, title, desc, writer }]);
  };
  return (
    <>
      <Navbar />
      <Container>
        <p className="text-amber-900 text-2xl text-center mb-7 font-bold mt-16">
          Gallery
        </p>
        <div className="relative grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mx-auto border-t border-amber-900 pt-3">
          {data.map((subs, i) => (
            <div
              key={i}
              onClick={() => handleClick(subs)}
              // onClick={() => setView(true)}
              className="relative min-h-full w-full cursor-pointer rounded object-cover border border-amber-900 border-sm sm:max-h-full"
            >
              <Image
                objectFit="cover"
                height={180}
                width={180}
                src={subs.img || produk}
                alt="vadin"
                // className="object-cover"
              />
              <div className="px-1 leading-relaxed font-semibold text-amber-900 border-l border-b border-amber-900 m-1">
                <p>{subs.title || "unknown"}</p>
                <span className="text-xs">{subs.writer || "unknown"}</span>
              </div>
            </div>
          ))}
        </div>
        {/* popup modal for detail */}
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
                          <div className="w-8/12 mx-auto">
                            <Image
                              height={180}
                              width={180}
                              objectFit="cover"
                              src={obj.img || produk}
                              alt={obj.title || "unknown"}
                            />
                          </div>
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
      </Container>
    </>
  );
};

// data for body

// const PopProduct = ({ open, close }) => {
//   if (!open) return null;

//   return (
//     <div className="fixed z-20 md:w-6/12 sm:w-8/12 h-4/6 w-11/12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transition-all ease-out duration-700 p-4 rounded-xl backdrop-blur-md bg-white/30">
//       <div
//         onClick={close}
//         className="cursor-pointer bg-amber-900 py-2 flex items-end px-3 max-w-max text-white rounded-md font-semibold"
//       >
//         <button>X</button>
//       </div>
//       <div className="md:p-5 p-2 text-amber-900 md:flex relative">
//         <div className="object-cover h-3/6 md:w-3/6">
//           <Image
//             src={produk}
//             alt="vadin"
//             className="object-cover w-9/12 flex m-auto"
//           />
//         </div>
//         <div className="my-5 font-semibold overflow-y-auto">
//           <tittle className="text-xl z-20">V-Coffee Ice Latte</tittle>
//           <desc className="font-normal block">
//             pasukan anti rungkat-rungkat dari leon club.
//           </desc>
//           <p className="opacity-70 text-xs text-gray-500">writer by Gunawan</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // modal gallery
// function MyModal({ open, close }) {
//   if (!open) return null;

//   return (
//     <>
//       <Transition appear show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={close}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <button
//                     onClick={close}
//                     className="absolute top-1 right-1 bg-red-200 rounded-full p-1 m-1"
//                   >
//                     <AiOutlineClose size={18} color="#f87171" />
//                   </button>
//                   <Dialog.Title
//                     as="h3"
//                     className="text-xl font-medium leading-6 text-gray-900 border-b-2 border-amber-100"
//                   >
//                     Detail
//                   </Dialog.Title>
//                   {modalContent.map((obj) => (
//                     <>
//                       <div key={obj._id} className="mt-4">
//                         <div className="w-8/12 mx-auto">
//                           <Image src={produk} alt={obj.title} />
//                         </div>
//                         <p className="text-sm text-gray-500">{obj.desc}</p>
//                         <p>{obj.writer}</p>
//                       </div>
//                     </>
//                   ))}
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// }

export default GalleryPage;
