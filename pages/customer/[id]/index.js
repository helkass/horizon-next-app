import Image from "next/image";
import defaultImage from "../../../fakeData/img/defaultImage.jpg";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import Container from "../../../components/Container";
import { DefaultInput } from "../../../components/Form";
import Layout from "../../../components/Layout";
import { getCustomers, updateCustomer } from "../../../libs/customer";

const URL = process.env.BASE_URL;

export const getStaticPaths = async () => {
  const res = await getCustomers();

  return {
    paths: res.map((customer) => {
      return {
        // .toLowerCase().replace(/ /g, "-")
        params: { id: customer._id.toString() },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${URL}api/customers/${params.id.replace(/\-/, "+")}`
  ).then((res) => res.json());
  return {
    props: { customer: res },
  };
};

const Customer = ({ customer }) => {
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    await updateCustomer(customer._id, data);
    console.log(data);
  };
  return (
    <Layout>
      <Container>
        <div className="text-amber-800 py-10">
          <div>
            <h1 className="text-center text-2xl">My Account</h1>
          </div>
          <main className="flex gap-7 relative">
            <Sidebar id={customer._id} />
            <form onSubmit={handleUpdate} className="sm:w-9/12 px-5 space-y-2">
              <div className="flex gap-3 items-center">
                <div className="w-[90px] h-[90px] rounded-full">
                  <Image
                    src={customer.img || defaultImage}
                    width={90}
                    height={90}
                    objectFit="cover"
                    className="rounded-full"
                    alt={`photo ${customer.fullname}`}
                  />
                </div>
                <input
                  type="file"
                  name="image"
                  className="block text-sm cursor-pointer text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-600"
                />
              </div>
              <div className="flex gap-5">
                <DefaultInput
                  label="fullname"
                  name="fullname"
                  defaultValue={customer.fullname}
                />
                <DefaultInput
                  label="phone"
                  name="phone"
                  defaultValue={customer.phone}
                />
              </div>
              <DefaultInput
                name="address"
                label="address"
                defaultValue={customer.address}
              />
              <div className="flex gap-5 w-10/12">
                <DefaultInput
                  name="city"
                  label="city"
                  defaultValue={customer.city}
                />
                <DefaultInput
                  name="provice"
                  label="province"
                  defaultValue={customer.province}
                />
              </div>
              <div className="flex gap-5 w-10/12">
                <DefaultInput
                  name="email"
                  label="email"
                  defaultValue={customer.email}
                />
              </div>
              <div className="w-full font-flower flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-yellow-100 min-w-[100px] my-7"
                >
                  Save
                </button>
              </div>
            </form>
          </main>
        </div>
      </Container>
    </Layout>
  );
};

export const Sidebar = ({ id }) => {
  return (
    <div className="sm:w-3/12 space-y-5 sm:flex flex-col fixed sm:relative">
      <Link href={`/customer/${id}`}>
        <>
          <span className="flex sm:hidden bg-yellow-100 bg-opacity-50 rounded-md z-50 backdrop-blur p-2 top-0">
            <AiOutlineUser size={20} />
          </span>
          <button className="rounded-r-full items-center gap-2 hidden sm:block hover:bg-yellow-50 pl-7 py-2 cursor-pointer">
            Account
          </button>
        </>
      </Link>
      <Link href={`/customer/${id}/orders`}>
        <>
          <span className="flex sm:hidden bg-yellow-100 bg-opacity-50 rounded-md z-50 backdrop-blur p-2 top-0">
            <AiOutlineShoppingCart size={20} />
          </span>
          <button className="pl-7 py-2 cursor-pointer hidden sm:block gap-2 items-center hover:bg-yellow-50">
            Orders
          </button>
        </>
      </Link>
    </div>
  );
};

export default Customer;
