import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Container from "../../../components/Container";
import { Sidebar } from ".";
import Image from "next/image";

function Orders() {
  const [isActive, setIsActive] = useState("pending");

  return (
    <Layout>
      <Container>
        <div className="flex gap-7 my-10 text-amber-800">
          <Sidebar />
          <main className="w-full">
            <div className="flex gap-3 ">
              <Button
                name="Pending"
                onClick={() => setIsActive("pending")}
                active={isActive === "pending"}
              />
              <Button
                name="Delevery"
                onClick={() => setIsActive("delevery")}
                active={isActive === "delevery"}
              />
              <Button
                name="History"
                onClick={() => setIsActive("history")}
                active={isActive === "history"}
              />
            </div>
            <div className="text-center flex justify-center items-center">
              {isActive === "pending" ? (
                <Content contentName="pending" />
              ) : (
                <></>
              )}
              {isActive === "delevery" ? (
                <Content contentName="delevery" />
              ) : (
                <></>
              )}
              {isActive === "history" ? (
                <Content contentName="history" />
              ) : (
                <></>
              )}
            </div>
          </main>
        </div>
      </Container>
    </Layout>
  );
}

const Button = ({ name, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`w-3/12 h-12 sm:4/12 ${
        active ? "border-b-2 border-yellow-500" : "border-b-2 border-white"
      }`}
    >
      {name}
    </button>
  );
};

const Content = ({ contentName }) => {
  const [status, setStatus] = useState("");
  let s = "success";
  useEffect(() => {
    if (contentName === "pending") {
      setStatus("not yet paid");
    } else if (contentName === "delevery") {
      setStatus("on delevery");
    } else if (contentName === "history") {
      setStatus("success");
    }
  }, [status, contentName]);
  return (
    <div className="my-4 flex gap-2 w-full text-sm bg-gray-50 bg-opacity-50 p-3 rounded-md">
      {/* image */}
      <div>
        <div className="w-32 h-32 bg-gray-200"></div>
      </div>
      {/* desc */}
      <div className="flex justify-between w-full">
        <div className="text-left space-y-1">
          <p>
            Order ID: <span className="text-yellow-400">93486kjenorg</span>
          </p>
          <strong className="capitalize">title product example</strong>
          <p>
            Size: <span className="text-yellow-500">500</span>gr
          </p>
          <p>
            Total : <span className="text-yellow-500">46000</span>
          </p>
          <p>
            Payment : <span className="text-yellow-500">Gopay</span>
          </p>
        </div>
        <div className="flex flex-col h-full">
          <span
            className={`${
              status === s
                ? " bg-green-50 border-green-600 text-green-600"
                : "bg-yellow-100 border-yellow-500"
            } rounded-full px-4 py-1 border`}
          >
            {status}
          </span>
          {status === "not yet paid" ? (
            <div className="flex justify-end items-end h-full">
              <button className="bg-green-50 border border-green-600 text-green-600 rounded-md px-3 py-1">
                Bayar
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
