import React from "react";
import Image from "next/image";

import Container from "../Container";
import logo from "../../fakeData/img/logo.png";
import BtnToProduct from "../BtnToProduct";

function Hero() {
  return (
    <section className="flex">
      <Container>
        <div className="flex">
          <div className="container md:mt-9 grid md:grid-cols-2 sm:mx-auto mx-3 z-10">
            <div className="text-center md:text-left xl:py-12 lg:pt-7 md:pt-4 mt-10 md:mt-0 mb-12 md:mb-0">
              <h1 className="lg:text-[50px] md:text-4xl capitalize text-3xl font-bold text-amber-900 md:pr-10 tracking-wider leading-relaxed lg:leading-relaxed">
                relaxing your mind with horizon coffee.
              </h1>
              <p className="w-full lg:w-full md:w-8/12 xl:mt-10 md:mt-5 lg:mt-8 md:font-semibold mt-7">
                Boost your produtifity and build your mood with a-glass of
                coffee.
              </p>
              <div className="relative flex md:mt-9 mt-16 w-full px-2 md:w-8/12 md:px-0 justify-center md:justify-between">
                <BtnToProduct value="Get Coffee" bg="amber-100" />
                <button className="hover:bg-amber-100 rounded-md hover:shadow-md px-2 md:px-8 py-3 md:w-max">
                  Reservation
                </button>
              </div>
            </div>
            <div className="relative md:w-9/12 items-center mx-auto w-4/6">
              <Image src={logo} alt="logo coffee" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
