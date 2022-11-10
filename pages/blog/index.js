import img from "../../fakeData/img/defaultImage.jpg";
import Image from "next/image";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LinesEllipsis from "react-lines-ellipsis";

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
        <div className="flex flex-col relative md:px-20 gap-5 mb-20 px-3 border-l-2 border-yellow-400">
          {blogs &&
            blogs.map((blog) => (
              <div key={blog.title} className="blog flex py-12 px-4 p-2">
                <div className="items-center flex sm:w-5/12 justify-center relative img">
                  <Image
                    src={blog.img || defaultImage}
                    height={240}
                    width={240}
                    objectFit="cover"
                    alt={blog.title || "unknown"}
                    className="absolute "
                  />
                </div>
                <div className="relative sm:w-7/12 flex flex-col sm:pb-5 px-2 py-1">
                  <Link href={"/blog/" + blog._id.toString()}>
                    <strong className="text-2xl cursor-pointer w-max hover:text-yellow-600">
                      {blog.title || "unknown"}
                    </strong>
                  </Link>
                  <span className="text-xs text-gray-500 mt-1">
                    writer : {blog.writer || "unknown"}
                  </span>
                  <LinesEllipsis maxLine="4" text={blog.article} />
                  <Link href={"/blog/" + blog._id.toString()}>
                    <button className="px-3 py-1 text-sm text-gray-500 border border-yellow-200 mt-6 rounded justify-start hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700 w-max">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
