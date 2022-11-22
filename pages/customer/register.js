// pages for customer
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import logo from "../../fakeData/img/login-logo.png";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { useCusContext } from "../../context/customerContext/useCusContext";
import { InputRegister } from "../../components/Form";
import Bug from "../../components/Bug";

const Register = () => {
  const router = useRouter();
  const { dispatch } = useCusContext();
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const form = Object.fromEntries(data.entries());
    try {
      const customer = await fetch(
        `http://localhost:3000/api/customers/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      if (customer.ok) {
        // save the admin in local storage
        localStorage.setItem("customer", JSON.stringify(form));
        setCookie("customer", JSON.stringify(data));
        // update the auth context
        dispatch({ type: "REGISTER", payload: data });
        router.push("/product");
      }
    } catch (error) {
      setError(true);
      console.log(error);
      setTimeout(() => setError(false), 5000);
    }
  };
  return (
    <Layout>
      <main className="sm:min-h-screen flex sm:flex-row flex-col sm:pt-18 ">
        <div className="w-4/12 relative bg-yellow-100 sm:min-h-[568px] sm:flex hidden justify-center items-center">
          <div className="bg-yellow-400 bg-opacity-70 rounded-t-full">
            <Image
              src={logo}
              width={200}
              height={400}
              objectFit="cover"
              alt="img"
            />
          </div>
        </div>
        <div className="sm:min-h-[568px] flex justify-center items-center sm:w-7/12 my-6 sm:my-0">
          <div className="w-full max-w-xl mt-16">
            <h2 className="text-2xl text-center font-flower my-4 sm:my-2">
              Welcome!
            </h2>
            {error ? <Bug /> : <></>}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4 space-y-2">
                <InputRegister name="fullname" className="w-full" />
                <div className="flex space-x-2">
                  <InputRegister name="phone" />
                  <InputRegister name="email" type="email" />
                </div>
                <InputRegister name="address" className="w-full" />
                <div className="flex space-x-2">
                  <InputRegister name="city" />
                  <InputRegister name="province" />
                </div>
                <InputRegister name="password" className="w-1/2" />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-yellow-200 hover:bg-yellow-500 tracking-wide text-yellow-600 hover:text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center text-gray-400 text-xs">
              Already have an account?
              <Link href="/customer/login">
                <span className="text-yellow-500 mx-1 text-sm cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Register;
