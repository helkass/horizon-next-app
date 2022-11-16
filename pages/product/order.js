import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineExclamationCircle, AiFillShopping } from "react-icons/ai";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Container from "../../components/Container";

export default function Order() {
  const cart = useSelector((state) => state.cart);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    postalcode: "",
    payment: "",
  });

  const onChange = (e) => {
    const { value, name, checked, type } = e.target;

    setForm((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form : ", { ...form });
  };
  return (
    <Layout>
      <main className="mt-20">
        <h2 className="font-flower text-xl text-center my-6">One more Step</h2>
        <form
          onSubmit={handleSubmit}
          className="flex relative sm:flex-row flex-col-reverse min-h-max pb-20"
        >
          {cart.cartItems.length > 0 ? (
            <>
              <div className="flex flex-col xl:p-14 p-6 gap-3 sm:w-6/12 md:bg-slate-50 bg-none">
                {cart.cartItems?.map((data, i) => (
                  <div key={i} className="flex gap-2">
                    <div className="rounded-md shadow p-1">
                      <Image
                        width={100}
                        height={100}
                        objectFit="cover"
                        alt="img"
                        src={data.img}
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-md font-flower">{data.title}</p>
                      <p className=" text-gray-600">Rp.{data.price}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t-2 gap-4 px-3 py-2 my-2 flex flex-col">
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Rp.3000</span>
                  </div>
                  <div className="flex justify-between mt-7 text-xl">
                    <span>Total : </span>
                    <span>Rp.{cart.cartTotalAmount}</span>
                  </div>
                </div>
              </div>
              {/* form */}
              <div className="flex flex-col gap-2 sm:w-7/12 md:p-10 md:w-full sm:p-8 p-4 space-y-6">
                <div className="flex sm:gap-2 gap-3 sm:flex-row flex-col w-8/12">
                  <input
                    type="text"
                    name="firstname"
                    onChange={onChange}
                    value={form.firstname}
                    required
                    className="shadow px-3 py-2 sm:w-1/2 focus:outline-none"
                    placeholder="firts name..."
                  />
                  <input
                    required
                    type="text"
                    onChange={onChange}
                    value={form.lastname}
                    name="lastname"
                    className="shadow px-3 py-2 sm:w-1/2 focus:outline-none"
                    placeholder="last name..."
                  />
                </div>
                <input
                  type="text"
                  required
                  onChange={onChange}
                  value={form.address}
                  name="address"
                  className="shadow px-3 py-2 w-full focus:outline-none min-h-26"
                  placeholder="address.."
                />
                <div className="flex gap-2 sm:flex-row flex-col w-1/2">
                  <input
                    type="text"
                    name="city"
                    onChange={onChange}
                    value={form.city}
                    required
                    className="shadow px-3 py-2 sm:w-1/2 focus:outline-none"
                    placeholder="city"
                  />
                  <input
                    required
                    type="text"
                    name="postalcode"
                    value={form.postalcode}
                    onChange={onChange}
                    className="shadow px-3 py-2 sm:w-1/2 focus:outline-none"
                    placeholder="Postal code"
                  />
                </div>
                {/* payment */}
                <div className="flex gap-4 flex-col">
                  <label className="text-yellow-600 gap-1 flex items-center">
                    <span>
                      <MdOutlinePayment size={20} />
                    </span>
                    Payment Method :{" "}
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {/* dana payment */}
                    <div className="flex items-center">
                      <input
                        type="radio"
                        value="dana"
                        onChange={onChange}
                        name="payment"
                        className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-none dark:focus:ring-yellow-600 dark:ring-offset-gray-500 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="dana"
                        className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                      >
                        Dana
                      </label>
                    </div>
                    {/* ovo payment */}
                    <div className="flex items-center">
                      <input
                        type="radio"
                        value="ovo"
                        onChange={onChange}
                        name="payment"
                        className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-none dark:focus:ring-yellow-600 dark:ring-offset-gray-500 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="ovo"
                        className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                      >
                        OVO
                      </label>
                    </div>
                  </div>
                </div>
                {/* end payment */}
              </div>
              <Link href="/product">
                <button className="bg-yellow-100 absolute left-0 bottom-0 translate-x-10 -translate-y-2/4 text-yellow-700 w-max px-3 font-flower py-3 rounded-md">
                  Back Shop
                </button>
              </Link>
              <button
                type="submit"
                className="bg-black absolute bottom-0 right-0 -translate-x-10 -translate-y-2/4 text-white w-max px-3 font-flower py-3 rounded-md"
              >
                Save and Delevery
              </button>
            </>
          ) : (
            <Container>
              <div className="flex justify-center gap-2 items-center border-2 border-red-600 text-red bg-red-50 w-11/12 mx-auto text-red-800 h-20 text-xl">
                <label>
                  <AiOutlineExclamationCircle size={25} />
                </label>
                Empty Cart!
              </div>
              <div className="flex justify-center mt-7">
                <Link href="/product">
                  <button className="px-3 py-2 flex items-center gap-2 bg-yellow-50 border-yellow-700 border text-amber-800 rounded-md">
                    <label>
                      <AiFillShopping size={25} />
                    </label>
                    Shop Now
                  </button>
                </Link>
              </div>
            </Container>
          )}
        </form>
      </main>
    </Layout>
  );
}
