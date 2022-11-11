import Layout from "../../components/admin/Layout";
import { AiFillDelete } from "react-icons/ai";
import { Loading } from "../../components/Loading";
import AddGallery from "../../components/admin/AddGallery";
import { getGallerys, deleteGallery } from "../../libs/gallerys";
import { deleteAction } from "../../redux/reducer";

import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useQueryClient } from "react-query";
import defaultImage from "../../fakeData/img/defaultImage.jpg";

// admin gallery set
export default function Galleries() {
  const dispactch = useDispatch();
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryclient = useQueryClient();
  // const [formData, setFormData] = useReducer(formReducer, {});
  const [visible, setVisible] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setVisible(visible ? false : true);
  };

  // delete handler
  const deleteHandler = async () => {
    if (deleteId) {
      await deleteGallery(deleteId);
      await queryclient.prefetchQuery("galleries", getGallerys);
      await dispactch(deleteAction(null));
    }
  };
  // cancle handler
  const cancelHandler = async () => {
    await dispactch(deleteAction(null));
  };

  const { isLoading, isError, data, error } = useQuery(
    "galleries",
    getGallerys
  );

  if (isError) return <div>Products Error...!</div>;

  return (
    <Layout>
      <div className="flex justify-between">
        <button
          onClick={handleAdd}
          className="bg-yellow-200 px-3 py-2 text-yellow-700 rounded-md my-1"
        >
          Add Photos
        </button>
        {deleteId ? DeleteComponent({ deleteHandler, cancelHandler }) : <></>}
      </div>
      {visible ? <AddGallery /> : <></>}
      <main className="grid md:grid-cols-4 max-h-36 grid-cols-2 sm:grid-cols-3 gap-2">
        {isLoading ? (
          <Loading />
        ) : (
          data.map((obj, i) => <TableBody {...obj} key={i} />)
        )}
      </main>
    </Layout>
  );
}

function TableBody({ _id, title, img, desc, writer }) {
  const dispactch = useDispatch();
  const onDelete = (e) => {
    e.preventDefault();
    dispactch(deleteAction(_id));
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
          onClick={onDelete}
          className="bg-red-500 text-white rounded-md h-max p-1 w-max mx-auto md:mx-0"
        >
          <AiFillDelete size={20} />
        </button>
      </div>
    </div>
  );
}

function DeleteComponent({ deleteHandler, cancelHandler }) {
  return (
    <div className="w-3/12 gap-3 z-20 bg-opacity-60 text-red-700 flex rounded py-1 justify-between items-center">
      <p>Delete?</p>
      <div className="space-x-4">
        <button
          onClick={cancelHandler}
          className="bg-green-200 text-green-600 px-4 py-1 rounded"
        >
          No
        </button>
        <button
          onClick={deleteHandler}
          className="bg-red-300 px-4 py-1 rounded"
        >
          Yes
        </button>
      </div>
    </div>
  );
}
