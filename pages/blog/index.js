import img from "../../fakeData/img/defaultImage.jpg";
import Image from "next/image";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Link from "next/link";

const URL = process.env.BASE_URL;
export const getStaticProps = async () => {
  const res = await fetch(`${URL}api/blogs`);
  const data = await res.json();
  return {
    props: { blogs: data },
  };
};
export default function Blog({ blogs }) {
  return (
    <>
      <Navbar />
      <div className="w-full md:h-52 h-48 flex items-center justify-center bg-yellow-200 bg-opacity-50 text-center">
        <div className="sm:text-3xl md:text-4xl text-yellow-900 text-2xl font-flower">
          Tulisan kami
        </div>
      </div>
      <Container>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 relative md:px-20 gap-2 mb-20 px-3">
          {blogs &&
            blogs.map((blog) => (
              <Link
                key={blog.title}
                // blog.title.toLowerCase().replace(/ /g, "-")
                href={"/blog/" + blog._id.toString()}
              >
                <div className="cursor-pointer shadow-md shadow-yellow-100 border p-2">
                  <div className="items-center flex justify-center relative">
                    <Image
                      src={blog.img || defaultImage}
                      height={220}
                      width={220}
                      alt={blog.title || "unknown"}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative sm:pb-5 px-2 py-1">
                    <p className="font-semibold">{blog.title || "unknown"}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      writer : {blog.writer || "unknown"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}

const BlogsBody = ({ blogs }) => {
  return <div></div>;
};
