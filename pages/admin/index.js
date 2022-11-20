import Layout from "../../components/admin/Layout";
import { MdOutlineArticle } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { TbCup } from "react-icons/tb";
import { RiRedPacketLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { getGallerys } from "../../libs/gallerys";
import { useQuery } from "react-query";
import { useState } from "react";
import { getProducts } from "../../libs/products";
import { getCoffeePacks } from "../../libs/coffeePacks";
import { getBlogs } from "../../libs/blogs";
import { getCustomers } from "../../libs/customer";

export default function Dashboard() {
  const cookie = getCookie("admin");
  const router = useRouter();

  const [gallery, setGallery] = useState([]);
  const [cups, setCups] = useState([]);
  const [packs, setPacks] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    if (cookie == undefined) {
      router.push("/login");
    }
    const fetchingData = async () => {
      let gal = await getGallerys();
      setGallery(gal);

      let cups = await getProducts();
      setCups(cups);

      let packs = await getCoffeePacks();
      setPacks(packs);

      let blogs = await getBlogs();
      setBlogs(blogs);

      let customer = await getCustomers();
      setCustomers(customer);
    };
    fetchingData();
  }, [cookie, router]);
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap md:gap-4 gap-1 px-3 w-full">
          <Card total={cups.length} name="Cups" icon={<TbCup size={25} />} />
          <Card
            total={packs.length}
            name="Packs"
            icon={<RiRedPacketLine size={25} />}
          />
          <Card
            total={gallery.length}
            name="Galleries"
            icon={<BsImage size={25} />}
          />
          <Card
            total={blogs.length}
            name="Blogs"
            icon={<MdOutlineArticle size={25} />}
          />
          <Card
            total={customers.length}
            name="Customers"
            icon={<FaUserFriends size={25} />}
          />
        </div>
        <HistoryTable />
      </div>
    </Layout>
  );
}

function Card({ name, icon, total }) {
  return (
    <div className="px-3 py-1 md:w-48 sm:h-20 h-16 flex flex-col bg-yellow-50 border rounded-md border-yellow-400">
      <div className="flex gap-2 text-[1.1rem] md:text-xl items-center justify-between">
        <span>{name}</span>
        <span>{icon}</span>
      </div>
      <span className="text-xl">{total}</span>
    </div>
  );
}

// table history order
function HistoryTable() {
  return (
    <section className="my-4 px-1 rounded max-w-[1340px]">
      <h1 className="text-xl my-2">History Ordering</h1>
      {/* head */}
      <div className="flex gap-1">
        <span className="py-1 pl-2 w-3/12 rounded bg-yellow-50">Name</span>
        <span className="text-center py-1 flex-1 rounded bg-yellow-50">
          Product
        </span>
        <span className="text-center py-1 w-2/12 rounded bg-yellow-50">
          Price
        </span>
        <span className="text-center py-1 w-2/12 rounded bg-yellow-50">
          Date
        </span>
      </div>
      {/* main ordering data */}
      <div className="flex gap-1 border-b my-1 md:text-md sm:text-sm text-xs">
        <span className="py-1 pl-2 w-3/12 rounded">Name</span>
        <span className="text-center py-1 flex-1 rounded">Product</span>
        <span className="text-center py-1 w-2/12 rounded">Price</span>
        <span className="text-center py-1 w-2/12 rounded">Date</span>
      </div>
    </section>
  );
}
