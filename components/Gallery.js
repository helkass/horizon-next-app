import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

import image from "../fakeData/img/imgSec.jpg";

const galleryData = [
  {
    id: 1,
    img: image,
    alt: "galq",
  },
  {
    id: 2,
    img: image,
    alt: "galq",
  },
  {
    id: 3,
    img: image,
    alt: "galq",
  },
  {
    id: 4,
    img: image,
    alt: "galq",
  },
  {
    id: 5,
    img: image,
    alt: "galq",
  },
  {
    id: 6,
    img: image,
    alt: "galq",
  },
];

const Gallery = () => {
  return (
    <section className="relative text-center md:my-6 font-semibold pt-8 md:px-0">
      <p className="sm:my-7 my-3 text-2xl">Our Gallery</p>
      <Container>
        <div className="overflow-hidden py-4">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryData.map((data) => (
                <div
                  className="w-full object-cover hover:scale-125 hover:z-20 hover:delay-200 duration-300 hover:shadow-none shadow-md shadow-slate-300 h-max"
                  key={data.id}
                >
                  <Image
                    alt={data.alt}
                    src={data.img}
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
