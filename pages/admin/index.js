import Layout from "../../components/admin/Layout";
import { MdOutlineArticle } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { TbCup } from "react-icons/tb";
import { RiRedPacketLine } from "react-icons/ri";

const icons = [TbCup, RiRedPacketLine, BsImage, MdOutlineArticle];

const datas = [
  {
    name: "Cups",
    total: 50,
  },
  {
    name: "Packs",
    total: 50,
  },
  {
    name: "galleries",
    total: 50,
  },
  {
    name: "Blogs",
    total: 4,
  },
];

function Card() {
  return datas.map((data, index) => {
    const Icons = icons[index];
    return (
      <div
        key={index}
        className="md:text-xl flex justify-between md:p-6 sm:p-4 p-3 rounded md:h-32 bg-amber-50 border border-amber-500 mx-auto text-amber-900 capitalize font-semibold md:w-3/12 w-4/12"
      >
        <div className="flex gap-2 sm:mb-3 mb-1 flex-col font-flower">
          <span>{data.name}</span>
          <p className="md:text-2xl text-xl">{data.total}</p>
        </div>
        <Icons size={40} />
      </div>
    );
  });
}

// table history order
function HistoryTable() {
  return (
    <section className="bg-slate-100 my-4 px-1 rounded">
      <h1 className="font-semibold my-2">History Ordering</h1>
      {/* read data only */}
      <table className="w-full border border-amber-900 opacity-80 text-xs sm:text-sm md:text-md">
        <thead className="border-b-2 border-amber-900 text-center">
          <tr>
            <th>Name</th>
            <th>Products</th>
            <th>Total</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-amber-900 min-h-12 md:text-center">
            <td>Maria Anders</td>
            <td>Vietnam drip, Arabica Gayo Aceh</td>
            <td>50000</td>
            <td>23 Jan 2022</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <div className="flex md:gap-4 gap-1 px-3 w-full">
          <Card />
        </div>
        <HistoryTable />
      </div>
    </Layout>
  );
}

// export const getServerSideProps = (ctx) => {
//   const myCookie = ctx.req?.cookie || "";

// const orderHistory = await axios.get("http://localhost:3000/api/products");
// if (myCookie.token !== process.env.TOKEN) {
//   return {
//     redirect: {
//       destination: "/admin/login",
//       permanent: false,
//     },
//   };
// }
//   return true;
// };
