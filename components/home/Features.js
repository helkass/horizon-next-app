import Container from "../Container";
import { FaMusic } from "react-icons/fa";
import { ImConnection, ImFilm } from "react-icons/im";
import logoBloob from "../../fakeData/img/logoAndBloob.png";
import BtnToProduct from "../BtnToProduct";

import Image from "next/image";

const Features = () => {
  return (
    <section id="menu" className="bg-yellow-100 bg-opacity-50 relative ">
      <Container>
        <div className="flex">
          <div className="container lg:mt-12 md:mt-7 grid md:grid-cols-2 sm:mx-auto mx-3 z-10">
            <div className="text-center md:text-left xl:py-8 lg:pt-7 md:pt-2 mb-12 md:mb-0">
              <h5 className="md:font-bold hover-3 p-1 rounded md:pr-10 md:text-3xl text-2xl md:w-9/12 sm:w-10/12">
                Enjoy Your Coffee with facility from Horizon Coffee Shop.
              </h5>
              <ul className="flex my-12 sm:my-9 md:w-9/12 w-full text-center">
                <li className="w-4/12 hover-1 py-2 rounded">
                  <FaMusic size={20} className="m-auto" />
                  <p>Live Music</p>
                </li>
                <li className="w-4/12 hover-1 py-2 rounded">
                  <ImConnection size={20} className="m-auto" />
                  <p>Free Wifi</p>
                </li>
                <li className="w-4/12 hover-1 py-2 rounded">
                  <ImFilm size={20} className="m-auto" />
                  <p>Film</p>
                </li>
              </ul>
              <div className="md:w-8/12 mt-7 mx-auto w-5/6 bg-amber-200 bg-opacity-60 rounded-full">
                <Image src={logoBloob} alt="logo coffee" className="" />
              </div>
            </div>
            <div className="relative float-left mt-16 lg:px-9 md: px-6">
              <p className="text-amber-600 text-lg font-semibold">Our Coffee</p>
              <p className="leading-normal capitalize lg:text-4xl text-3xl lg:w-10/12 w-full">
                choose your coffee favorite coffee
              </p>
              <p className="my-4">
                <span className="text-amber-600 text-2xl">Drip</span> |
                Cappucino | Mocha
              </p>
              <p className="mb-7 mt-14">
                Lebih dari 10 jenis kopi pilihan untuk kamu nikmati sesuai
                dengan seleramu.
              </p>
              <BtnToProduct
                value="Product list"
                bg="amber-200"
                text="amber-900"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
