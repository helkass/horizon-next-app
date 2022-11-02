import Navbar from "./Navbar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex md:gap-3 gap-1">
        <Navbar />
        {children}
      </div>
    </>
  );
}
