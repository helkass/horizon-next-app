import Content from "../../components/admin/Content";
import Layout from "../../components/admin/Layout";

const datas = [
  {
    name: "product",
    total: 50,
  },
  {
    name: "gallery",
    total: 50,
  },
  {
    name: "admin",
    total: 4,
  },
];

function Card() {
  return datas.map((data, index) => (
    <div
      key={index}
      className="md:text-xl md:p-6 sm:p-4 p-3 rounded-xl md:h-32 bg-amber-300 mx-auto text-amber-900 capitalize font-semibold md:w-3/12 w-4/12"
    >
      <div className="flex gap-2 sm:mb-3 mb-1">
        <span>{data.name}</span>
      </div>
      <p className="md:text-2xl text-xl">{data.total}</p>
    </div>
  ));
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
            <th>No</th>
            <th>Name</th>
            <th>Products</th>
            <th>Total</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-amber-900 min-h-12 md:text-center">
            <td>1</td>
            <td>Maria Anders</td>
            <td>Vietnam drip, Arabica Gayo Aceh</td>
            <td>50000</td>
            <td>23 Jan 2022</td>
          </tr>
          <tr className="border-b border-amber-900 min-h-12 md:text-center">
            <td>1</td>
            <td>Maria Anders</td>
            <td>Vietnam drip, Arabica Gayo Aceh</td>
            <td>50000</td>
            <td>23 Jan 2022</td>
          </tr>
          <tr className="border-b border-amber-900 min-h-12 md:text-center">
            <td>1</td>
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

const Dashboard = () => {
  return (
    <Layout>
      <Content>
        <div className="flex flex-col w-full">
          <div className="flex md:gap-4 gap-1 px-3 w-full">
            <Card />
          </div>
          <HistoryTable />
        </div>
      </Content>
    </Layout>
  );
};

export default Dashboard;
