import Image from "next/image";
import Layout from "../../../components/admin/Layout";
import { Loading } from "../../../components/Loading";
import LinesEllipsis from "react-lines-ellipsis";
import { AiFillDelete } from "react-icons/ai";
import { useQueryClient, useQuery } from "react-query";
import { getBlogs, deleteBlog } from "../../../libs/blogs";
import { Transition, Dialog } from "@headlessui/react";
import { useState, Fragment } from "react";
import defaultImage from "../../../fakeData/img/defaultImage.jpg";
import Link from "next/link";

const Blogs = () => {
  const { data, isLoading, isError } = useQuery("blogs", getBlogs);
  return (
    <Layout>
      <section className="flex flex-col">
        <div className="text-center text-2xl my-4 font-flower">
          <h2>Blog</h2>
        </div>
        <main>
          <div className="flex justify-between">
            <Link href="/admin/blogs/add">
              <button className="px-3 py-1 bg-yellow-50 border-white border-2 hover:border-yellow-500 hover:bg-yellow-100">
                Add Content
              </button>
            </Link>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="grid sm:grid-cols-2 sm:gap-8 gap-5 mt-8 px-7 justify-between w-11/12">
              {data.map((obj, i) => (
                <BodyBlogs {...obj} key={i} />
              ))}
            </div>
          )}
        </main>
      </section>
    </Layout>
  );
};

function BodyBlogs({ _id, title, img }) {
  const [view, setView] = useState(false);
  const [blogId, setBlogId] = useState("");
  const queryclient = useQueryClient();

  const handleClick = (id) => {
    setView(!view);
    setBlogId(id);
  };
  const onDelete = async () => {
    await deleteBlog(blogId);
    await queryclient.prefetchQuery("blogs", getBlogs);
    setView(!view);
  };
  return (
    <>
      <div className="relative">
        <div className="blur-xs">
          <Image
            src={img || defaultImage}
            alt="img-cover"
            width={420}
            height={200}
            objectFit="cover"
          />
        </div>
        <button
          onClick={() => handleClick(_id)}
          className="absolute bottom-0 text-red-600 right-0 p-2 -translate-x-4 -translate-y-4 bg-red-200 bg-opacity-40 border-red-600 border"
        >
          <AiFillDelete />
        </button>
        <div className="bg-amber-500 text-white px-3 py-2 text-xl absolute top-0 translate-x-1/3 translate-y-1/2 z-20 capitalize">
          <LinesEllipsis maxLine="5" text={title} />
        </div>
      </div>
      <Transition appear show={view} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleClick}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900 border-b-2 border-amber-100"
                  >
                    Sure to delete?
                  </Dialog.Title>
                  {/* {modalContent.map((obj, i) => ( */}
                  <div className="flex justify-center gap-12 my-6">
                    <button
                      onClick={handleClick}
                      className="bg-green-200 text-green-600 px-4 py-2 rounded"
                    >
                      No
                    </button>
                    <button
                      onClick={onDelete}
                      className="bg-red-300 px-4 py-2 rounded"
                    >
                      Yes
                    </button>
                  </div>
                  {/* ))} */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Blogs;
