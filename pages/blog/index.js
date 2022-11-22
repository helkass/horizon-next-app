import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogItems from "../../components/pages/blogs";

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
        <div className="flex flex-col relative md:px-20 gap-1 mb-20 px-3 border-l-2 border-yellow-400">
          {blogs &&
            blogs.map((blog, i) => (
              <BlogItems
                key={blog._id}
                id={blog._id}
                title={blog.title}
                article={blog.article}
                date={blog.createdAt}
                image={blog.img}
              />
            ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
