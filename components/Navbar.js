import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useCusContext } from "../context/customerContext/useCusContext";
import { useLogout } from "../context/customerContext/useLogout";
import { useRouter } from "next/router";

const link = [
  { href: "/", label: "Home" },
  { href: "/galleries", label: "Gallery" },
  { href: "/product", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
const Navbar = () => {
  const { logout } = useLogout();
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { customer } = useCusContext();
  const router = useRouter();
  const handleLogOut = () => {
    logout();
    router.push("/");
  };
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });
  return (
    <nav
      className={
        navbar
          ? "bg-yellow-600 shadow-md text-white z-50 fixed w-screen"
          : "bg-amber-100 text-amber-700 z-50 fixed w-screen"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            {/* header logo */}
            <div className="flex-shrink-0 text-2xl tracking-wide font-txthead">
              <Link href="/">
                <h2>HORIZON</h2>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {link.map((link, i) => (
                  <Link href={link.href} key={i}>
                    <a
                      className={
                        navbar
                          ? "border-b-2 border-amber-600 hover:border-white px-3 py-2 text-sm font-medium"
                          : "border-b-2 hover:border-amber-600 border-amber-100 px-3 py-2 text-sm font-medium"
                      }
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            {customer ? (
              <div className="flex items-center gap-1">
                <span className="text-sm">{customer.fullname}</span>
                <button
                  onClick={handleLogOut}
                  className={
                    navbar
                      ? "bg-yellow-300 px-2 py-1 rounded text-amber-800"
                      : "bg-yellow-300 px-2 py-1 rounded"
                  }
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="sm:flex gap-3 items-center hidden mr-2">
                <Link href="/customer/login">
                  <button className="px-4 py-1">Login</button>
                </Link>
                <Link href="/customer/register">
                  <button
                    className={
                      navbar
                        ? "bg-yellow-100 px-3 py-1 rounded text-amber-800"
                        : "bg-yellow-400 px-3 py-1 rounded text-white"
                    }
                  >
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <FaBars size={20} />
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {link.map((link, i) => (
              <Link href={link.href} key={i}>
                <a className="block px-3 py-2 rounded-md text-base font-medium">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
