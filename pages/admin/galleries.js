import Layout from "../../components/admin/Layout";
import Content from "../../components/admin/Content";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Loading } from "../../components/Loading";
import AddGallery from "../../components/admin/AddGallery";
import UpdateGallery from "../../components/admin/UpdateGallery";
import { getGallerys } from "../../libs/gallerys";

import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../../redux/reducer";
import { useQuery } from "react-query";
import defaultImage from "../../fakeData/img/defaultImage.jpg";

const flag = true;

// admin gallery set
export default function Galleries() {
  // const [formData, setFormData] = useReducer(formReducer, {});
  const [visible, setVisible] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setVisible(visible ? false : true);
  };

  const { isLoading, isError, data, error } = useQuery(
    "galleries",
    getGallerys
  );

  if (isLoading) return <Loading />;
  if (isError) return <div>Products Error...!</div>;

  return (
    <Layout>
      <Content>
        <button
          onClick={handleAdd}
          className="bg-yellow-200 px-3 py-2 text-yellow-700 rounded-md my-1"
        >
          Add Photos
        </button>
        {flag ? (
          visible ? (
            <AddGallery />
          ) : (
            <></>
          )
        ) : visible ? (
          <UpdateGallery />
        ) : (
          <></>
        )}
        <main className="grid md:grid-cols-4 max-h-36 grid-cols-2 sm:grid-cols-3 gap-2">
          {data.map((obj, i) => (
            <TableBody {...obj} key={i} />
          ))}
        </main>
      </Content>
    </Layout>
  );
}

function TableBody({ id, title, img, desc, writer }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction());
    console.log(visible);
  };
  return (
    <div className="bg-amber-50 rounded-md p-1 text-xs lg:text-sm tracking-wide">
      <div className="w-full items-center flex justify-center py-1">
        <Image
          width={160}
          height={170}
          objectFit="cover"
          src={img || defaultImage}
          className="mx-auto"
          alt={title}
        />
      </div>
      <p>{title || "unknown"}</p>
      <p>{desc || "unknown"}</p>
      <p className="opacity-70 text-xs mt-3">
        Created by {writer || "unknown"}
      </p>
      <div className="flex justify-end m-3 gap-2">
        <button
          onClick={onUpdate}
          className="bg-yellow-300 rounded-md h-max p-1 relative w-max mx-auto md:mx-0"
        >
          <AiFillEdit size={20} />
        </button>
        <button className="bg-red-500 text-white rounded-md h-max p-1 w-max mx-auto md:mx-0">
          <AiFillDelete size={20} />
        </button>
      </div>
    </div>
  );
}
