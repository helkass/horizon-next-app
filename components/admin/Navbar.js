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
  { href: "/admin", label: "Dashboard" },
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
    <nav className="md:w-2/12 bg-yellow-400 text-slate-900 mt-4 rounded-r-lg w-12 sm:w-16 h-full flex justify-center text-center">
      <div className="h-4/6 font-semibold text-amber-900 py-5 space-y-14">
        {links.map((link, i) => {
          const Icon = icons[i];
          return (
            <Link key={i} href={link.href}>
              <button className="h-8 hover:border-b justify-center items-center w-full border-amber-900 hover:scale-110 flex gap-2 md:pb-3 pb-1">
                <Icon size={22} />
                <p className="hidden md:block">{link.label}</p>
              </button>
            </Link>
          );
        })}
        <button
          onClick={handleLogOut}
          className="flex justify-center items-center gap-3"
        >
          <AiOutlinePoweroff size={20} />
          <span className="hidden md:flex">Log Out</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
