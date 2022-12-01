import Container from "../../components/Container";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Form, InputCalculate } from "../../components/Form";
import Bug from "../../components/Bug";
import Image from "next/image";

const Whatsapp = () => {
  const [error, setError] = useState(false);
  const [datas, setDatas] = useState(null);
  const [discount, setDiscount] = useState(0);

  const [form, setForm] = useState({
    username: "",
    company: "",
    address: "",
    orderNote: "",
    product: "",
    medium: "",
    large: "",
    total: "",
  });
  const router = useRouter();
  // order
  let test = useRef(null);

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // get value from product page
  const {
    query: { id, qtyM, qtyL, total },
  } = router;

  const props = { id, qtyM, qtyL, total };
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/api/products`);
    setDatas(data);
  };
  useEffect(() => {
    getData();
  }, []);
  function handleWhatsapp() {
    // accumulate sub total
    let subMedium = props.qtyM * form.medium;
    let subLarge = props.qtyL * form.large;

    const checkedDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    let urls = "https://web.whatsapp.com/send",
      adminwa = "6283852742170"; //nomer admin
    // checkdevice
    if (checkedDevice) {
      let urls = "whatsapp://send";
    }
    if ((form.username == "", form.address == "")) {
      return setError(true);
    } else {
      setError(false);
      const blanterWA = `${urls}?phone=${adminwa}&text=DATA SAYA*%0A================%0A*Nama* : ${form.username}%0A*Companyname:${form.company}%0A *Alamat* : ${form.address}%0A*MetodePembayaran* : COD%0A%0A=============%0A*Daftar belanjar*%0A%0A*NamaProduk* : ${form.product}%0A*Medium* : ${form.medium}x${qtyM}=Rp.${subMedium}%0A*Large* : ${form.large}x${qtyL}=Rp.${subLarge}%0A*Total* : ${form.total}%0A===============%0A*OrderNote* : ${form.orderNote}%0A
    `;
      window.open(blanterWA, "_blank");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = new FormData(e.target);
    const datas = Object.fromEntries(newData.entries());
    setForm((prev) => ({
      ...prev,
      ...datas,
    }));
  };

  // discount
  if (props.total >= 50000) {
    setDiscount(5000);
  }

  return (
    <Container>
      <main className="text-yellow-800">
        <div className="flex border-b-2 items-center py-2 justify-between border-amber-900 w-full">
          <h2 className="capitalize text-2xl">checkout</h2>
          <Link href="/product">
            <div className="flex justify-center items-center gap-2 bg-yellow-100 hover:text-yellow-500 p-2 rounded-md cursor-pointer">
              <AiOutlineArrowLeft size={20} />
            </div>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="my-7 md:flex flex-col-1 gap-3">
          {/* form customer */}
          <div className="flex flex-col w-full px-1 md:w-1/2 ">
            {error ? <Bug /> : ""}
            <h2
              ref={test}
              className="rounded-md w-full border-b-2 bg-yellow-50 border-yellow-500 border-r text-yellow-600 text-xl px-4 py-2 my-4"
            >
              Billing Details
            </h2>
            <div className="grid px-3 pt-6 pb-12 bg-yellow-50 rounded-md shadow-md shadow-yellow-400">
              <Form name="username" onChange={onchange} />
              <Form name="company" onChange={onChange} />
              <Form name="address" onChange={onChange} />
              <label value="Username" className="mt-1">
                Order note(optional)
              </label>
              <textarea
                onChange={onChange}
                id="note"
                type="text"
                name="orderNote"
                className="rounded-md min-h-[150px] font-medium p-1 mt-1 focus:outline-none"
              />
            </div>
          </div>
          {/* order product */}
          <div className=" flex flex-col md:w-1/2 w-full">
            <h2 className="w-full text-black font-flower text-xl text-center my-7">
              My Order
            </h2>
            <div className="px-6 flex justify-between mb-5">
              <span className="flex gap-2 items-center">
                status
                <AiOutlineCloseCircle color="#FCA5A5" />
              </span>
              <span>{new Date().toISOString().substring(0, 10)}</span>
            </div>
            {datas
              ?.filter((item) => item._id === props.id)
              .map((obj, i) => (
                <div key={i} className="px-2">
                  <div className="bg-yellow-50 rounded-lg py-3 px-2 my-2">
                    Order Summary
                  </div>
                  <div className="p-2 flex gap-2">
                    <Image
                      src={obj.img}
                      alt="image"
                      objectFit="cover"
                      width={90}
                      height={90}
                      className="rounded-md"
                    />
                    <div className="w-full space-y-1">
                      <input
                        readOnly
                        defaultValue={obj.title}
                        className="outline-none capitalize cursor-default"
                        name="product"
                      />
                      {qtyM > 0 ? (
                        <InputCalculate
                          name="medium"
                          defaultValue={obj.medium}
                          qty={props.qtyM}
                        />
                      ) : (
                        <></>
                      )}
                      {qtyL > 0 ? (
                        <InputCalculate
                          name="large"
                          defaultValue={obj.large}
                          qty={props.qtyL}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="flex text-gray-500 justify-between">
                      <span>Subtotal</span>
                      <span>{props.total}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Discount</span>
                      <span>{discount}</span>
                    </div>
                    <div className="flex justify-between mt-7">
                      <p>Total : </p>
                      <label>
                        <span>Rp.</span>
                        <input
                          defaultValue={props.total - discount}
                          name="total"
                          readOnly
                          className="outline-none w-16 text-right"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="w-full flex justify-end">
                    <a
                      onClick={handleWhatsapp}
                      className="flex w-max bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-4 py-2 rounded-lg my-8"
                    >
                      <button type="submit">checkout</button>
                    </a>
                  </div>
                  <span className="font-normal text-sm">
                    Order by Whatsapp!
                  </span>
                </div>
              ))}
          </div>
        </form>
      </main>
    </Container>
  );
};

export default Whatsapp;
