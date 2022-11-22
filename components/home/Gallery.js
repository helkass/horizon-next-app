import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "react-query";
import { getGallerys } from "../../libs/gallerys";
import { Loading } from "../Loading";

const Gallery = () => {
  const { isLoading, isError, data, error } = useQuery(
    "galleries",
    getGallerys
  );
  if (isLoading) return <Loading />;
  if (isError) return <div>Galleries Error...!</div>;
  return (
    <section className="relative text-center md:my-6 font-semibold pt-8 md:px-0">
      <p className="sm:my-7 my-3 text-2xl">Our Gallery</p>
      <Container>
        <div className="overflow-hidden py-4">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {data &&
                data.slice(0, 6).map((gallery) => (
                  <div
                    className="w-full relative object-cover hover:scale-125 hover:z-20 hover:delay-200 duration-300 hover:shadow-none shadow-md shadow-slate-300 h-max"
                    key={gallery._id}
                  >
                    <Image
                      height={200}
                      width={200}
                      objectFit="cover"
                      alt={gallery.title}
                      src={gallery.img}
                      className="rounded h-full "
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Link href="/gallery">
          <button className="my-12 text-xl hover-1 px-3 py-2 rounded">
            See more
          </button>
        </Link>
      </Container>
    </section>
  );
};

export default Gallery;
