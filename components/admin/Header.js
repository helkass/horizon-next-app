import Image from "next/image";
import Link from "next/link";
import defaultImage from "../../fakeData/img/defaultImage.jpg";

import pf from "../../fakeData/img/bottle.png";

const Header = () => {
  return (
    <header className="w-screen bg-amber-300">
      <div className="flex font-medium justify-between w-full items-center md:py-5 py-2 md:px-7 px-4">
        <Link href="/">
          <h1 className="md:text-2xl text-2xl font-txthead">
            Horizon<span className="text-sm ml-1">admin</span>
          </h1>
        </Link>
        <div className="gap-3 bg-yellow-400 rounded-full">
          <div className="object-cover bg-yellow-400 md:w-12 rounded-full max-w-14 border-none h-full flex items-center justify-center">
            <Image
              alt="horizon"
              src={defaultImage}
              className="rounded-full object-cover"
              height={60}
              width={60}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
