import Layout from "../../components/admin/Layout";
import { useAuthContext } from "../../context/useAuthContext";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getCustomers } from "../../libs/customer";

const Account = () => {
  const { admin } = useAuthContext();
  const [edit, setEdit] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const dataFetching = async () => {
      const data = await getCustomers();
      setCustomers(data);
    };
    dataFetching();
  }, []);

  const editBtn = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const form = Object.fromEntries(data.entries());
    console.log(form);
  };

  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <Layout>
      <main className="flex flex-col px-1">
        {/* admin login */}
        <div className="flex gap-2 border-b-2 border-yellow-300 py-2">
          <p className="font-flower">
            your email is <span className="font-semibold"> {admin.email}</span>
          </p>
          <button
            onClick={editBtn}
            className="flex gap-2 items-center bg-yellow-200 rounded-md px-3 py-1"
          >
            <AiFillEdit />
          </button>
        </div>
        {edit ? (
          <form onSubmit={handleEdit} className="space-y-5">
            <Input name="email" />
            <Input name="password" />
            <button
              type="submit"
              className="flex gap-2 items-center bg-yellow-200 rounded-md px-3 py-1"
            >
              <AiFillEdit />
              Edit
            </button>
          </form>
        ) : (
          <></>
        )}
        {/* fetching all customer */}
        {/* head */}
        <div className="flex gap-2 md:w-1/2 text-center py-2 sm:w-3/4">
          <span className="bg-yellow-100 rounded-md flex-1">Email</span>
          <span className="bg-yellow-100 rounded-md flex-1">Password</span>
          <span className="bg-yellow-100 rounded-md w-1/12">act</span>
        </div>
        {/* main data */}
        {customers.map((customer) => (
          <div
            key={customer._id}
            className="flex gap-2 md:w-1/2 text-center py-2 sm:w-3/4"
          >
            <span className="rounded-md flex-1 overflow-hidden">
              {customer.email}
            </span>
            <span className="rounded-md flex-1">*************</span>
            <button
              onClick={() => handleDelete(customer._id)}
              className="py-1 rounded-md flex justify-center text-red-500 bg-red-50 w-1/12"
            >
              <AiFillDelete />
            </button>
          </div>
        ))}
      </main>
    </Layout>
  );
};

function Input({ name, value }) {
  return (
    <div className="flex flex-col gap-2 sm:w-1/2">
      <label>{name}</label>
      <input
        name={name}
        className="focus:outline-none border-yellow-400 border px-4 py-1 rounded-md"
        value={value}
      />
    </div>
  );
}

export default Account;
