import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
