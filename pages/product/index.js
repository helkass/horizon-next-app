/* eslint-disable react-hooks/rules-of-hooks */
import { useState, Fragment, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";

// fake
import img from "../../fakeData/img/bottle.png";
import defaultImage from "../../fakeData/img/defaultImage.jpg";

// icons
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa";
import Router from "next/router";

// include module to new variable
const product = [
  {
    id: 1,
    name: "Dampit ice coffee",
    type: "Dampit biasa",
    medium: 2000,
    large: 50000,
    img: img,
    desc: "A positive perspective on aging predicts better health and longer life",
    size: "700ml",
  },
];

export default function Test() {
  return (
    <>
      <Navbar />
      <main className="sm:pt-20 pt-14">
        <Container>
          <div className="flex w-full justify-between text-amber-900 pb-2 md:pb-0 items-center border-b-2 border-amber-900 md:border-none">
            <p className="text-2xl text-left md:mb-7 font-semibold sm:w-5/12 md:py-2 md:border-b-2 border-amber-900">
              List Products
            </p>
          </div>
          {product.map((obj, i) => (
            <TableProducts {...obj} key={i} />
          ))}
        </Container>
      </main>
    </>
  );
}

function TableProducts(props) {
  const [countMedium, setCountMedium] = useState(0);
  const [countLarge, setCountLarge] = useState(0);

  const handleMediumMin = (e) => {
    e.preventDefault();
    if (countMedium <= 0) {
      return null;
    } else {
      setCountMedium(countMedium - 1);
    }
  };

  // large
  const handleLargeMin = (e) => {
    e.preventDefault();
    if (countLarge <= 0) {
      return null;
    } else {
      setCountLarge(countLarge - 1);
    }
  };
  // get value
  const ref = useRef("");
  const pm = useRef(null);
  const lg = useRef(null);

  function sendProps() {
    const name = ref.current.value;
    const PM = pm.current.value;
    const LG = lg.current.value;

    let totalMedium = PM * countMedium;
    let totalLarge = LG * countLarge;
    let totalOrder = totalLarge + totalMedium;

    Router.push({
      pathname: "/product/checkout",
      query: {
        name: name,
        priceM: PM,
        medium: countMedium,
        totMedium: totalMedium,
        priceL: LG,
        large: countLarge,
        totLarge: totalLarge,
        totalOrder: totalOrder,
      },
    });
  }
  const [view, setView] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const handleClick = (props) => {
    setView(!view);
    setModalContent([props]);
  };

  return (
    <>
      <div className="relative grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mx-auto pt-3">
        <div className="relative w-full rounded object-cover shadow-amber-800 shadow-md px-1 py-2 sm:max-h-full max-h-96">
          <Image
            src={props.img || defaultImage}
            alt="vadin"
            className="object-cover cursor-pointer"
          />
          <div className="px-1 block leading-relaxed font-semibold text-amber-900 m-1">
            <p>{props.name || "unknown"}</p>
            <p className="text-xs font-normal opacity-60 my-2">
              Rp.{props.medium} - Rp.{props.large}
            </p>
            <button
              onClick={() => handleClick(props)}
              className="text-sm opacity-50 bg-gray-200 rounded mt-2 py-1 text-gray-800 text-center w-full"
            >
              Quick view
            </button>
          </div>
        </div>
      </div>
      {/* modal content for detailing */}
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
                    <form key={i}>
                      <div className="mt-4">
                        <div className="w-8/12 mx-auto">
                          <Image src={obj.img || defaultImage} alt={obj.name} />
                        </div>
                        <p>{obj.name || "unknown"}</p>
                        <p className="text-sm text-gray-500">
                          {obj.desc || "unknown"}
                        </p>
                      </div>
                      <div>
                        <input
                          className="hidden"
                          value={obj.name || "unknown"}
                          id="name"
                          ref={ref}
                          readOnly
                          name="name"
                        />
                        <div className="mt-4 w-full">
                          <div className="flex justify-between text-gray-400 items-center">
                            <label htmlFor="medium" className=" w-1/2 text-sm">
                              Md/500ml
                            </label>
                            <div>
                              <span>Rp.</span>
                              <input
                                name="priceMedium"
                                id="priceMedium"
                                ref={pm}
                                readOnly
                                value={obj.medium || "unknown"}
                                className="w-12"
                              />
                            </div>
                            <div className="items-center">
                              <button
                                onClick={handleMediumMin}
                                className="p-1 bg-yellow-100 text-amber-500 rounded-md"
                              >
                                <AiOutlineMinus />
                              </button>
                              <input
                                name="countMedium"
                                readOnly
                                value={countMedium}
                                className="w-8 text-center text-black"
                              />
                              <button
                                onClick={(e) =>
                                  e.preventDefault() +
                                  setCountMedium(countMedium + 1)
                                }
                                className="p-1 bg-yellow-100 text-amber-500 rounded-md"
                              >
                                <AiOutlinePlus />
                              </button>
                            </div>
                          </div>
                          {/* large size */}
                          <div className="flex justify-between items-center text-gray-400">
                            <label htmlFor="medium" className=" w-1/2 text-sm">
                              Lg/1000ml
                            </label>
                            <div>
                              <span>Rp.</span>
                              <input
                                name="priceLarge"
                                id="priceLarge"
                                value={obj.large}
                                ref={lg}
                                readOnly
                                className="w-12"
                              />
                            </div>
                            <div className="items-center">
                              <button
                                onClick={handleLargeMin}
                                className="p-1 bg-yellow-100 text-amber-500 rounded-md"
                              >
                                <AiOutlineMinus />
                              </button>
                              <input
                                name="large"
                                readOnly
                                value={countLarge}
                                className="w-8 text-center text-black"
                              />
                              <button
                                onClick={(e) =>
                                  e.preventDefault() +
                                  setCountLarge(countLarge + 1)
                                }
                                className="p-1 bg-yellow-100 text-amber-500 rounded-md"
                              >
                                <AiOutlinePlus />
                              </button>
                            </div>
                          </div>
                          {/* checkout button */}
                          <div className="flex justify-evenly">
                            <a
                              onClick={() => sendProps()}
                              className="mt-4 inline-flex gap-2 justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                            >
                              <BsWhatsapp size={18} />
                              CheckOut
                            </a>
                            <button
                              type="submit"
                              className="mt-4 inline-flex gap-2 justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                            >
                              <FaMotorcycle size={18} />
                              By Gojek
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
