import Layout from "../../components/admin/Layout";

import { AiOutlineCheck } from "react-icons/ai";

import image from "../../fakeData/img/imgSec.jpg";

import Image from "next/image";

// fakedata
const datas = [
  {
    id: "bijkg435v3454v56",
    name: "Gunawan",
    product: "Dampit biasa",
    address: "jl.Bhayangkara No.23 Ds.Kenanti Kec.Tambakboyo",
    qty: 2,
    size: "700",
    total: 20000,
  },
];

// show all product from DB
const Order = () => {
  return (
    <Layout>
      <h1 className="text-center my-3 text-lg font-semibold">All Product</h1>
      {/* head */}
      <div className="w-full h-6 sm:h-9 rounded flex flex-cols gap-1 font-semibold text-center text-xs sm:text-sm md: text-md">
        <div className="bg-amber-400 rounded py-1 w-2/12">
          <p>Name</p>
        </div>
        <div className="bg-amber-400 rounded py-1 w-3/12">
          <p>Address</p>
        </div>
        <div className="bg-amber-400 rounded py-1 w-3/12">
          <p>Products</p>
        </div>
        <div className="bg-amber-400 rounded py-1 w-1/12">
          <p>Size</p>
        </div>
        <div className="bg-amber-400 rounded py-1 w-1/12">
          <p>Qty</p>
        </div>
        <div className="bg-amber-400 rounded py-1 w-2/12">
          <p>Total Rp</p>
        </div>
        <div className="bg-amber-400 rounded py-1 items-center flex w-1/12">
          <AiOutlineCheck className="mx-auto" />
        </div>
      </div>
      {/* body */}
      <main className="mt-2 gap-3">
        {datas.map((data) => {
          return (
            <div
              key={data.id}
              className="w-full text-xs sm:text-sm max-h-24 rounded flex flex-cols gap-1 mt-1 md:text-center text-left"
            >
              <div className="bg-yellow-100 rounded py-1 w-2/12 px-1">
                <p className="self-center">{data.name}</p>
              </div>
              <div className="bg-yellow-100 rounded flex justify-center py-1 w-3/12">
                <p>{data.address}</p>
              </div>
              <div className="bg-yellow-100 rounded py-1 w-3/12">
                <p>{data.product}</p>
              </div>
              <div className="bg-yellow-100 rounded p-1 w-1/12">
                <p>{data.size}</p>
              </div>
              <div className="bg-yellow-100 rounded p-1 w-1/12 text-center">
                <p>{data.qty}</p>
              </div>
              <div className="bg-yellow-100 rounded py-1 w-2/12 text-center">
                <p>{data.total}</p>
              </div>
              <div className="bg-yellow-100 text-amber-50 p-1 rounded w-1/12">
                <button className="bg-red-600 p-1 rounded-lg">
                  <AiOutlineCheck />
                </button>
              </div>
            </div>
          );
        })}
      </main>
    </Layout>
  );
};

export default Order;
