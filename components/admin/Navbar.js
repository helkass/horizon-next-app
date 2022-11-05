import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineHome,
  AiOutlineDropbox,
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { GrGallery, GrArticle } from "react-icons/gr";
// import Cookies from "js-cookie";

const Navbar = () => {
  // const router = useRouter();
  // const logOut = () => {
  //   Cookies.remove("dashboardAdmin");
  //   router.push("/");
  // };
  return (
    <main className="md:w-3/12 bg-yellow-400 text-slate-900 mt-4 rounded-r-lg h-full flex justify-center text-center">
      <div className="grid h-4/6 mx-4 font-semibold text-amber-900 py-5 space-y-14">
        <Link href="/admin">
          <button className="h-8 hover:border-b border-amber-900 hover:scale-110 flex gap-2 md:pb-3 pb-1">
            <AiOutlineHome size={22} />
            <p className="hidden sm:block">Dashboard</p>
          </button>
        </Link>
        <Link href="/admin/products">
          <button className="h-8 hover:border-b border-amber-900 hover:scale-110 flex gap-2 md:pb-3 pb-1">
            <AiOutlineDropbox size={22} />
            <p className="hidden sm:block">Product</p>
          </button>
        </Link>
        <Link href="/admin/galleries">
          <button className="h-8 hover:border-b border-amber-900 hover:scale-110 flex gap-2 md:pb-3 pb-1">
            <GrGallery size={22} />
            <p className="hidden sm:block">Gallery</p>
          </button>
        </Link>
        <Link href="/admin/blogs">
          <button className="h-8 hover:border-b border-amber-900 hover:scale-110 flex gap-2 md:pb-3 pb-1">
            <GrArticle size={22} />
            <p className="hidden sm:block">Blogs</p>
          </button>
        </Link>
        <Link href="/admin/order">
          <button className="h-8 hover:border-b border-amber-900 hover:scale-110 flex gap-2 md:pb-3 pb-1">
            <AiOutlineShopping size={22} />
            <p className="hidden sm:block">Order</p>
          </button>
        </Link>
        <Link href="/admin/account">
          <button className="h-8 hover:border-b border-amber-900 hover:scale-110 flex gap-2 md:pb-3 pb-1">
            <AiOutlineUser size={22} />
            <p className="hidden sm:block">Account</p>
          </button>
        </Link>
        <div>
          <button
            // onClick={logOut}
            className="flex justify-center items-center gap-3"
          >
            <AiOutlinePoweroff size={20} />
            Log Out
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
