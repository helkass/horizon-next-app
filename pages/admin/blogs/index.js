import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../../components/admin/Layout";
import LinesEllipsis from "react-lines-ellipsis";
import { AiFillDelete } from "react-icons/ai";

import defaultImage from "../../../fakeData/img/defaultImage.jpg";

const URL = process.env.BASE_URL;

const Blogs = ({ blogs }) => {
  const handleDelete = () => {};
  return (
    <Layout>
      <section className="flex flex-col">
        <div className="text-center text-2xl my-4 font-flower">
          <h2>Blog</h2>
        </div>
        <main>
          <Link href="/">
            <button className="px-3 py-1 bg-yellow-50 border-white border-2 hover:border-yellow-500 hover:bg-yellow-100">
              Add Content
            </button>
          </Link>
          <div className="grid sm:grid-cols-2 sm:gap-8 gap-5 mt-8 px-7 justify-between w-11/12">
            {blogs?.map((blog) => (
              <div className="relative" key={blog._id}>
                <div className="blur-xs">
                  <Image
                    src={blog.img || defaultImage}
                    alt="img-cover"
                    width={420}
                    height={200}
                    objectFit="cover"
                  />
                </div>
                <button
                  onClick={handleDelete}
                  className="absolute bottom-0 text-red-600 right-0 p-2 -translate-x-4 -translate-y-4 bg-red-200 bg-opacity-40 border-red-600 border"
                >
                  <AiFillDelete />
                </button>
                <div className="bg-amber-500 text-white px-3 py-2 text-xl absolute top-0 translate-x-1/3 translate-y-1/2 z-20 capitalize">
                  <LinesEllipsis maxLine="5" text={blog.title} />
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${URL}/api/blogs`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { blogs: data } };
}

export default Blogs;
