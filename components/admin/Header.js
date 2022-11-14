import Image from "next/image";
import Link from "next/link";
import defaultImage from "../../fakeData/img/defaultImage.jpg";
import { useAuthContext } from "../../context/useAuthContext";

const Header = () => {
  const { admin } = useAuthContext();
  return (
    <header className="bg-amber-300 w-screen">
      <div className="flex font-medium justify-between w-full items-center md:py-4 py-2 md:px-7 px-4">
        <Link href="/">
          <h1 className="md:text-2xl text-2xl font-txthead cursor-pointer">
            Horizon
            {admin ? (
              <span className="text-xs ml-1">{admin.email}</span>
            ) : (
              <></>
            )}
          </h1>
        </Link>
        <div className="gap-3 rounded-full">
          <div className="object-cover text-sm  md:w-12 rounded-full max-w-14 border-none h-full flex items-center justify-center">
            <Image
              alt="horizon"
              src={defaultImage}
              className="rounded-full object-cover"
              height={55}
              width={55}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
