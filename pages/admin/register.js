import React, { useState, useReducer } from "react";
import Link from "next/link";
import Container from "../../components/Container";
import { useRouter } from "next/router";

import { AiOutlineArrowLeft } from "react-icons/ai";

export default function AdminLogin() {
  const url = process.env.BASE_URL;
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("you dont have any data!");
    //   execute post method
    await createAdmin();
  };
  const createAdmin = async () => {
    try {
      await fetch(`${url}api/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative w-full h-screen leading-relaxed tracking-wider font-semibold text-amber-900">
      <Container>
        <Link href="/">
          <button className="bg-amber-100 absolute left-2 top-2 p-2 font-normal rounded-md flex space-x-2">
            <AiOutlineArrowLeft
              size={20}
              color="#78350f"
              className="flex m-auto"
            />
            <p>Home</p>
          </button>
        </Link>
        <div className="mx-auto bg-yellow-50 bg-opacity-50 text-left md:w-4/12 sm:w-9/12 w-11/12 md:mt-12 mt-36 rounded-md p-12">
          <form onSubmit={handleSubmit} method="post">
            <label htmlFor="email" name="email" className="my-4">
              email
            </label>
            <input
              name="email"
              type="text"
              required
              onChange={setFormData}
              //   value={email}
              className="w-full border-amber-500 border drop-shadow-sm rounded-md h-8 mb-3 px-2 font-normal"
            />
            <label htmlFor="password" name="password" className="my-4">
              Password
            </label>
            <input
              className="w-full border-amber-500 border drop-shadow-sm rounded-md h-8 px-2 font-normal"
              type="password"
              //   value={password}
              name="password"
              required
              onChange={setFormData}
            />
            <button
              type="submit"
              className="w-5/12 py-3 mt-7 m-auto flex justify-center bg-amber-100 rounded-lg tracking-wider"
            >
              Create
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
