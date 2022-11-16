import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import defaultImage from "../../fakeData/img/defaultImage.jpg";
import Image from "next/image";

const URL = process.env.BASE_URL;

export const getStaticPaths = async () => {
  const res = await fetch(`${URL}api/blogs`).then((r) => r.json());

  return {
    paths: res.map((blog) => {
      return {
        // .toLowerCase().replace(/ /g, "-")
        params: { id: blog._id.toString() },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${URL}api/blogs/${params.id.replace(/\-/, "+")}`
  ).then((r) => r.json());
  return {
    props: { blog: res },
  };
};

const DetailBlog = ({ blog }) => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="md:px-20 my-20">
          {/* header */}
          <header className="text-center items-center my-6 space-x-2">
            {/* time published */}
            <p className="text-gray-700 text-opacity-70 text-xs">
              Published {new Date(blog.createdAt).toDateString()}
            </p>
            {/* title */}
            <p className="text-2xl font-semibold">{blog.title}</p>
          </header>
          {/* image content */}
          <div className="relative w-full h-full">
            <Image
              src={blog.img || defaultImage}
              alt={blog.title}
              height={200}
              width={450}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          {/* main content article */}
          <p
            className="md:px-10 px-2 my-4 tracking-wide"
            dangerouslySetInnerHTML={{ __html: blog.article }}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default DetailBlog;
