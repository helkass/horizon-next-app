import React, { useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";

export default function Contact() {
  const [alert, setAlert] = useState(false);
  //for controlling form values
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  // setter input
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  // handlesbumit and sand to email @horizoncoff20@gmail.com
  const handleSubmit = (e) => {
    e.preventDefault();
    // public_key = 7lhGPHe7F1ZJqrAhX
    emailjs
      .send("service_kepokk8", "template_5alvoqt", values, "7lhGPHe7F1ZJqrAhX")
      .then(
        (response) => {
          if (response.status == 200) return setAlert(true);
          console.log("SUCCESS", response);
          setValues({
            name: "",
            email: "",
            message: "",
          });
          // setStatus("success");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <Navbar />
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center mt-14 w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Tanyakan apapun dan kami siap berdiskusi dengan anda
            </p>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
            {alert && <Alert />}
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    onChange={handleChange}
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto items-center justify-center gap-2 text-yellow-900 bg-yellow-300 bg-opacity-70 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 hover:bg-opacity-100 rounded text-lg"
                >
                  Kirim
                  <AiOutlineSend />
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a>horizoncoff20@email.com</a>
                <p className="leading-normal my-5">
                  49 Bhayangkara Kenanti
                  <br />
                  Tambakboyo Tuban 62353
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function Alert() {
  return (
    <div className=" w-full px-5 flex justify-center items-center">
      <div className="border text-gray-500 border-green-300 text-sm bg-green-100 bg-opacity-60 px-7 py-1 rounded-md">
        <p>Terima kasih, email kamu telah terkirim!</p>
      </div>
    </div>
  );
}
