import React, { useState } from "react";
import Link from "next/link";
import Container from "../../components/Container";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const router = useRouter();
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = async () => {
  //     try {
  //       await axios.post("http://localhost:3000/api/login", {
  //         email,
  //         password,
  //       });
  //       router.push("/admin");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
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
          <form action="/api/admin" method="post">
            <label htmlFor="email" name="email" className="my-4">
              email
            </label>
            <input
              name="email"
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
              // value={email}
              className="w-full border-amber-500 border drop-shadow-sm rounded-md h-8 mb-3 px-2 font-normal"
            />
            <label htmlFor="password" name="password" className="my-4">
              Password
            </label>
            <input
              className="w-full border-amber-500 border drop-shadow-sm rounded-md h-8 px-2 font-normal"
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-5/12 py-3 mt-7 m-auto flex justify-center bg-amber-100 rounded-lg tracking-wider"
            >
              Login
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
