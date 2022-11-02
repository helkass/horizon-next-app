import img from "../fakeData/img/defaultImage.jpg";
import Image from "next/image";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogs from "../fakeData/blogs.json";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="w-full md:h-64 h-48 flex items-center justify-center bg-yellow-200 bg-opacity-50 text-center">
        <div className="sm:text-3xl md:text-4xl text-yellow-900 text-2xl font-flower">
          Tulisan kami
        </div>
      </div>
      <Container>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 relative md:px-20 gap-2 mb-20">
          {/* looping here */}
          {blogs.map((sub, i) => (
            <div
              className="relative md:space-y-4 space-y-2 mt-3 bg-gray-50"
              key={i}
            >
              <div className="items-center flex justify-center">
                <Image
                  src={img}
                  height={620}
                  alt={sub.title}
                  className="w-full object-cover"
                />
              </div>
              <div className="relative px-1 sm:pb-5 pb-3">
                <p className="text-xl font-semibold">title</p>
                <p className="text-gray-700 text-sm">
                  {sub.desc}
                  <span className="text-amber-600 ml-2">read more...</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
