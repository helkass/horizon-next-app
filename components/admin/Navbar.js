import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { GrGallery, GrArticle } from "react-icons/gr";
import { TbCup } from "react-icons/tb";
import { RiRedPacketLine } from "react-icons/ri";
import { useLogout } from "../../context/useLogout";
import { useRouter } from "next/router";

const icons = [
  AiOutlineHome,
  TbCup,
  RiRedPacketLine,
  GrGallery,
  GrArticle,
  AiOutlineUser,
];
const links = [
  { href: "/admin", label: "Home" },
  {
    href: "/admin/products",
    label: "Cups",
  },
  {
    href: "/admin/packs",
    label: "Packs",
  },
  { href: "/admin/galleries", label: "Gallery" },
  { href: "/admin/blogs", label: "Blogs" },
  {
    href: "/admin/account",
    label: "Account",
  },
];
const Navbar = () => {
  const { logout } = useLogout();
  const router = useRouter();
  const handleLogOut = () => {
    logout();
    router.push("/login");
  };
  return (
    <nav className=" z-50 md:w-2/12 bg-yellow-50 text-slate-900 mt-4 rounded-r-lg w-12 sm:w-16 h-full flex justify-center text-center">
      <div className="h-4/6 font-semibold py-5 space-y-12 w-full sm:pl-4">
        {links.map((link, i) => {
          const Icon = icons[i];
          return (
            <Link key={i} href={link.href}>
              <button className="hover:bg-white items-center w-full flex gap-2 md:py-2 pb-1 pl-1 rounded-l-full">
                <Icon size={22} />
                <span className="hidden md:block">{link.label}</span>
              </button>
            </Link>
          );
        })}
        <button
          onClick={handleLogOut}
          className="flex justify-center items-center gap-3 pl-1"
        >
          <AiOutlinePoweroff size={20} />
          <span className="hidden md:flex">Log Out</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
