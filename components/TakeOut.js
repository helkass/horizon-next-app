import React from "react";
import BtnToProduct from "./BtnToProduct";

const TakeOut = () => {
  return (
    <div className="text-center text-amber-900 leading-relaxed tracking-wide my-20">
      <div className="grid md:grid-cols-2 gap-5 my-14 md:text-left text-center items-center max-h-max">
        <div className="md:w-4/12 w-full capitalize text-3xl p-auto font-semibold pl-12 pr-9">
          <p>ambil kopimu sekarang!</p>
        </div>
        <div className=" w-full py-auto px-4 md:px-2 text-center">
          <p>
            Jangan biarkan kopimu dingin, dan segeralah ke Horizon Coffee Shop
            dan nikmati secangkir kopi panas yang nikmat. Anda juga bisa memesan
            dan kami siap antar ketempat anda.
          </p>
        </div>
      </div>
      <BtnToProduct value="Order Sekarang" bg="amber-100" />
    </div>
  );
};

export default TakeOut;
