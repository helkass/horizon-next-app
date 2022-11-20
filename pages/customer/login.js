// pages for customer

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import logo from "../../fakeData/img/login-logo.png";
import { setCookie } from "cookies-next";
import { useCusContext } from "../../context/customerContext/useCusContext";
import { useRouter } from "next/router";
import { useLogin } from "../../context/customerContext/useLogin";

const Login = () => {
  const router = useRouter();
  const { dispatch } = useCusContext();
  const { login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    // try {
    //   const customer = await fetch(`http://localhost:3000/api/customers`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const data = customer.json();
    //   if (customer.ok) {
    //     // save the admin in local storage
    //     localStorage.setItem("customer", JSON.stringify(data._id));
    //     setCookie("customer", JSON.stringify(data._id));
    //     // update the auth context
    //     dispatch({ type: "LOGIN", payload: customer });
    //     router.push("/product");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <Layout>
      <main className="sm:min-h-screen flex sm:flex-row flex-col pt-18">
        <div className="sm:w-1/2 relative bg-yellow-100 sm:min-h-[568px] sm:flex hidden justify-center items-center">
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
        <div className="sm:w-1/2 sm:min-h-[568px] flex justify-center items-center my-20 sm:my-0">
          <div className="w-full max-w-xs">
            <h2 className="text-2xl hover-3 text-center font-flower py-1 my-12 sm:my-0">
              Hello Again!
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-yellow-400 focus:shadow-outline"
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-yellow-400 focus:shadow-outline"
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-yellow-200 hover:bg-yellow-500 tracking-wide text-yellow-600 hover:text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-center text-gray-400 text-xs">
              Don&apos;t have an account yet?
              <Link href="/customer/register">
                <span className="text-yellow-500 mx-1 text-sm cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

function Input({ name, type }) {
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-yellow-400 focus:shadow-outline"
        id={name}
        type={type}
      />
    </div>
  );
}

export default Login;
