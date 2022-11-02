/* eslint-disable react/no-unescaped-entities */
import Container from "./Container";
import TakeOut from "./TakeOut";
import { Disclosure } from "@headlessui/react";
import { AiOutlineDown } from "react-icons/ai";

const Reviews = () => {
  return (
    <Container>
      <section
        id="reviews"
        className="flex md:text-left text-center text-amber-900 md:px-8 sm:px-3"
      >
        <div className="grid md:grid-cols-2">
          <div className="w-full px-1 py-2 hover-1">
            <p className="mb-7 font-semibold text-xl">Questions?</p>
            <p className="my-7 md:w-5/6 w-full capitalize text-3xl font-bold tracking-wide">
              Pertanyaan yang sering ditanyakan
            </p>
            <p>
              Kami selalau memberikan yang terbaik untuk membuat pelanggan kami
              senang dengan layanan kami
            </p>
          </div>
          {/* <div className="md:h-56 h-52 border shadow-md shadow-amber-800 border-amber-900"></div> */}
          <Disclosures />
        </div>
      </section>
      <TakeOut />
    </Container>
  );
};

function Disclosures() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
              <span>Bisakah saya memeilih kopinya?</span>
              <AiOutlineDown
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-amber-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Kami menyediakan Anda dengan biji kopi terbaik, sehingga Anda
              dapat mengalami rasa dan rasa yang berbeda untuk setiap
              pengiriman. Kami ingin menjaga elemen kejutan untuk Anda ketika
              Anda membuka kotak Gordi. Dengan mengingat hal ini, Anda tidak
              dapat menyesuaikan pilihan kopi tertentu untuk setiap pengiriman.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure className="mt-2" as="div">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
              <span>Darimana saja kopi yang dipilih Horizon?</span>
              <AiOutlineDown
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-amber-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Kami membuat biji kopi Anda dari berbagai roaster di Indonesia dan
              mancanegara. Terkadang, Anda juga akan mendapatkan biji kopi dari
              pemanggang Internasional sebagai kejutan.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
              <span>bagaimana saya biasa order online?</span>
              <AiOutlineDown
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-amber-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              kami melayani order online menggunakan aplikasi gojek, whatsapp,
              atau bisa langsung kontak email
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
export default Reviews;
