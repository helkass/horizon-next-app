import Container from "../../components/Container";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Router, { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

//form login for buyer
//continue add product to checkout

const CheckOut = () => {
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderNote, setOrderNote] = useState("");
  // const [totalOrder, setTotalOrder] = useState(0);
  const router = useRouter();
  // order
  let test = useRef(null);
  let productName = useRef("");
  let priceMedium = useRef(null); //price medium
  let qtyMedium = useRef(null);
  let priceLarge = useRef(null); //price large
  let qtyLarge = useRef(null);
  let totalMedium = useRef(null);
  let totalLarge = useRef(null);
  let total = useRef(null);

  // get value from product page
  const {
    query: {
      name,
      priceM,
      priceL,
      medium,
      large,
      totMedium,
      totLarge,
      totalOrder,
    },
  } = router;
  const props = {
    name,
    priceM,
    priceL,
    medium,
    large,
    totMedium,
    totLarge,
    totalOrder,
  };

  function handleWhatsapp() {
    let urls = "https://web.whatsapp.com/send",
      adminwa = "6285608017738"; //nomer admin
    // checkdevice
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      let urls = "whatsapp://send";
    }
    if ((userName == "", phone == "", address == "")) {
      return setError(true);
    } else {
      let inputProductName = productName.current.innerText,
        totalMed = totalMedium.current.innerText,
        totalLar = totalLarge.current.innerText,
        totalPrice = total.current.innerText;
      setError(false);
      const blanterWA = `${urls}?phone=${adminwa}&text=DATA SAYA*%0A================%0A*Nama* : ${userName}%0A*Email* : ${email}%0A*No.Wa* : ${phone}%0A*Companyname:${companyName}%0A *Alamat* : ${address}%0A*MetodePembayaran* : COD%0A%0A=============%0A*Daftar belanjar*%0A%0A*NamaProduk* : ${inputProductName}%0A*Medium* : ${totalMed}%0A*Large* : ${totalLar}%0A*Total* : ${totalPrice}%0A===============%0A*OrderNote* : ${orderNote}%0A
    `;
      window.open(blanterWA, "_blank");
    }
  }
  return (
    <Container>
      <main className="text-yellow-800">
        <div className="flex border-b-2 items-center py-2 justify-between border-amber-900 w-full">
          <h2 className="capitalize text-2xl">checkout</h2>
          <Link href="/product">
            <div className="flex justify-center items-center gap-2 hover:bg-yellow-100 hover:text-yellow-600 p-2 rounded-md cursor-pointer">
              <AiOutlineArrowLeft size={20} />
              Kembali
            </div>
          </Link>
        </div>
        <form className="my-7 md:flex flex-col-1 gap-3">
          <div className="flex flex-col w-full px-1 md:w-1/2">
            {error ? <ErrorMessage /> : ""}
            <h2
              ref={test}
              className="rounded-md w-full border-b-2 bg-yellow-50 border-yellow-500 border-r text-yellow-600 text-xl px-4 py-2 my-4"
            >
              Billing Details
            </h2>
            <label value="Username" className="mt-1">
              Username<span className="text-red-600 font-semibold">*</span>
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="focus:outline-none focus:border-yellow-200 focus:border-2 focus:ring-yellow-200 border-b font-medium p-1 mt-1 border-amber-900 border-opacity-60 border-l"
            />
            <label value="Username" className="mt-1">
              Company name(optional)
            </label>
            <input
              onChange={(e) => setCompanyName(e.target.value)}
              id="company"
              value={companyName}
              type="text"
              name="company"
              className="border-b font-medium p-1 mt-1 border-amber-900 border-opacity-60 border-l"
            />
            <label value="alamat" className="mt-1">
              Alamat<span className="text-red-600 font-semibold">*</span>
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              id="alamat"
              value={address}
              type="text"
              name="alamat"
              className="border-b font-medium p-1 mt-1 border-amber-900 border-opacity-60 border-l"
            />
            <label value="phone" className="mt-1">
              Phone<span className="text-red-600 font-semibold">*</span>
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              value={phone}
              name="phone"
              className="border-b font-medium p-1 mt-1 border-amber-900 border-opacity-60 border-l"
            />
            <label value="email" className="mt-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              name="email"
              className="border-b font-medium p-1 mt-1 border-amber-900 border-opacity-60 border-l"
            />
            <label value="Username" className="mt-1">
              Order note(optional)
            </label>
            <textarea
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
              id="note"
              type="text"
              name="note"
              className="border-b font-medium p-1 mt-1 border-amber-900 border-opacity-60 border-l"
            />
          </div>
          {/*  */}
          <div className=" flex flex-col md:w-1/2 w-full">
            <h2 className="rounded-md w-full border-b-2 bg-yellow-50 border-yellow-500 border-r text-yellow-600 text-xl px-4 py-2 max-h my-4">
              Your Order
            </h2>
            <div className="border border-opacity-50 border-amber-900 px-1">
              <div className="flex justify-between border-b-2 border-amber-900 p-2 my-2">
                <p>Product</p>
                <p>Sub Total</p>
              </div>
              <div className="p-2">
                <p ref={productName} className="font-semibold">
                  {props.name || "unknown"}
                </p>
                <div className="flex justify-between">
                  <p>Medium :</p>
                  <div className="flex space-x-1 justify-between">
                    <p ref={priceMedium}>{props.priceM || 0}</p>
                    <p ref={qtyMedium}>x {props.medium || 0}</p>
                  </div>
                  <p ref={totalMedium}>{props.totMedium}</p>
                </div>
                <div className="flex flex-cols-3 justify-between">
                  <p>Large</p>
                  <div className="flex space-x-1 justify-between">
                    <p ref={priceLarge}>{props.priceL || 0}</p>
                    <p ref={qtyLarge}>x {props.large || 0}</p>
                  </div>
                  <p ref={totalLarge}>{props.totLarge}</p>
                </div>
              </div>
              <div className="flex justify-between border-t-2 border-b-2 border-amber-900 p-2">
                <p>Total : </p>
                <p ref={total}>{props.totalOrder}</p>
              </div>
              <a
                onClick={handleWhatsapp}
                className="flex mx-auto bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-4 py-2 rounded-lg my-8"
              >
                checkout
              </a>
              <p className="font-normal">Order by Whatsapp!</p>
            </div>
          </div>
        </form>
      </main>
    </Container>
  );
};
function ErrorMessage() {
  return (
    <div className="border-red-300 p-3 flex justify-center items-center text-red-600">
      Error, Please input Data
    </div>
  );
}
export default CheckOut;
