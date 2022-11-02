import Layout from "../../components/admin/Layout";
import Content from "../../components/admin/Content";
import { BtnEdit } from "../../components/admin/BtnEditDelete";
import Image from "next/image";

import pf from "../../fakeData/img/bottle.png";

const Account = () => {
  return (
    <Layout>
      <Content>
        <div className="flex-col sm:flex md:gap-2 gap-1 sm:flex-rows-2 sm:flex-row-reverse">
          <div className="sm:w-5/12 w-4/6 h-full mb-7">
            <div className="relative object-cover border-none rounded-full mb-3">
              <Image src={pf} alt="ko" className="h-60" />
            </div>
            <BtnEdit className="justify-self-end" />
          </div>
          <div className="sm:w-7/12 w-full">
            <div className="my-1 bg-slate-100 rounded grid gap-1">
              <p className="bg-yellow-50 p-1 rounded w-max text-gray-500 text-sm">
                username
              </p>
              <p className="bg-yellow-100 p-2 rounded">Gunawan Wibisono</p>
            </div>
            <div className="my-1 bg-slate-100 rounded grid gap-1">
              <p className="bg-yellow-50 p-1 rounded w-max text-gray-500 text-sm">
                Password
              </p>
              <p className="bg-yellow-100 p-2 rounded">********</p>
            </div>
            <div className="my-1 bg-slate-100 rounded grid gap-1">
              <p className="bg-yellow-50 p-1 rounded w-max text-gray-500 text-sm">
                Email
              </p>
              <p className="bg-yellow-100 p-2 rounded">gunawan@gmail.com</p>
            </div>
            <div className="my-1 bg-slate-100 rounded grid gap-1">
              <p className="bg-yellow-50 p-1 rounded w-max text-gray-500 text-sm">
                No.Telp/WA
              </p>
              <p className="bg-yellow-100 p-2 rounded">098736874946</p>
            </div>
            <div className="my-1 bg-slate-100 rounded grid gap-1">
              <p className="bg-yellow-50 p-1 rounded w-max text-gray-500 text-sm">
                Address
              </p>
              <p className="bg-yellow-100 p-2 rounded">
                jl.Bhayangkara no.09 Rt.02 Rw.01 Ds.Kenanti Kec Tambakboyo
              </p>
            </div>
            <button className="bg-green-300 px-3 py-1 rounded text-black mt-4">
              Update
            </button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Account;
