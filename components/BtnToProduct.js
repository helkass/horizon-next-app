import React from "react";
import Link from "next/link";

function BtnToProduct({ value, bg, text }) {
  return (
    <Link href="/product">
      <button
        className={`
          bg-${bg} hover:bg-amber-50 shadow-lg hover:text-amber-900 px-2 md:px-5 py-3 rounded font-bold`}
      >
        {value}
      </button>
    </Link>
  );
}

export default BtnToProduct;
