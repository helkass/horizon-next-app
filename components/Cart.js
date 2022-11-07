import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const [qty, setQty] = useState(1);

  const handleMinus = (e) => {
    e.preventDefault();
    if (qty <= 0) {
      return null;
    } else {
      setQty(qty - 1);
    }
  };

  const handleRemove = (product) => {
    dispatch(remove(product._id));
  };
  return (
    <Menu as="div" className="relative inline-block text-left z-40">
      <div>
        <Menu.Button className="relative inline-flex w-full justify-center rounded-md bg-yellow-100 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span className="rounded-full bg-yellow-300 absolute -top-2 -left-2 px-2">
            {items.length}
          </span>
          <BsFillCartFill size={20} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute md:w-[620px] sm:w-[450px] w-[350px] right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={`${
                    active ? "bg-yellow-50 bg-opacity-30" : ""
                  } group w-full items-center rounded-md justify-center px-2 py-2 text-sm cursor-default`}
                >
                  {items.length > 0 ? (
                    <div>
                      {items.map((product) => (
                        <div
                          key={product._id}
                          className="flex w-full items-center gap-2"
                        >
                          <div className="relative">
                            <Image
                              src={product.img}
                              alt={product.title}
                              width={100}
                              height={100}
                              objectFit="cover"
                            />
                          </div>
                          <div className="w-full">
                            <div className="flex justify-between">
                              <p className="md:text-xl w-max mb-2 bg-yellow-100 rounded-md sm:px-2 px-1">
                                {product.title}
                              </p>
                              <button
                                onClick={() => handleRemove(product)}
                                className="bg-red-100 border border-red-400 text-red-700 rounded md:h-7 md:w-7 w-5 h-5"
                              >
                                X
                              </button>
                            </div>
                            <div className="flex justify-between">
                              <div className="flex space-x-2">
                                <p>size : </p>
                                <p>{product.size} gr</p>
                              </div>
                              <div className="flex space-x-2 items-center">
                                <button
                                  className="sm:h-6 w-5 h-5 sm:w-6  text-xl text-center items-center flex justify-center p-2 shadow-md"
                                  onClick={handleMinus}
                                >
                                  -
                                </button>
                                <span>{qty}</span>
                                <button
                                  className="sm:h-6 w-5 h-5 sm:w-6  text-xl text-center items-center flex justify-center p-2 shadow-md"
                                  onClick={(e) =>
                                    setQty(qty + 1) + e.preventDefault()
                                  }
                                >
                                  +
                                </button>
                              </div>
                              <p>Rp.{product.price * qty}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <button className="bg-green-50 text-green-700 border border-green-300 rounded-md px-3 cursor-pointer py-1 float-right my-3 mr-2">
                        Order Now
                      </button>
                    </div>
                  ) : (
                    <div className="text-center w-11/12 bg-red-50 border border-red-400 rounded-md">
                      Empty Cart!
                    </div>
                  )}
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
