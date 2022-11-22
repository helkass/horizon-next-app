import Layout from "../components/Layout";
import { Loading } from "../components/Loading";
import { getGallerys } from "../libs/gallerys";
import Bug from "../components/Bug";
import { useQuery } from "react-query";
import { GalleryItems } from "../components/pages/galleries";

export default function Galleries() {
  const { isLoading, isError, data, error } = useQuery(
    "galleries",
    getGallerys
  );
  return (
    <Layout>
      <section className="min-h-[768px] bg-yellow-50 bg-opacity-50">
        <div className="flex justify-center items-center pt-20 text-4xl h-32 font-flower">
          Galleries
        </div>
        <main className="grid md:grid-cols-4 grid-cols-2 sm:grid-cols-3 gap-2 my-9 sm:px-12 px-4">
          {isLoading ? (
            <Loading />
          ) : (
            data.map((obj, i) => <GalleryItems {...obj} key={i} />)
          )}
          {isError ? <Bug /> : <></>}
        </main>
      </section>
    </Layout>
  );
}
