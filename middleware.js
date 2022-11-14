import { NextResponse } from "next/server";

export default function middleware(req) {
  const token = req.cookies.get("admin");
  let url = req.url;
  const BASE = process.env.BASE_URL;

  // api url access required token access
  if (url.includes(`/api`) && !token) {
    return NextResponse.redirect(`${BASE}login`);
  }

  // admin access
  if (url.includes("/admin") && token == undefined) {
    return NextResponse.redirect(`${BASE}login`);
  }

  if (url.includes(`${BASE}login`) && token) {
    return NextResponse.redirect(`${BASE}admin`);
  }
  // console.log(token);
  return NextResponse.next();
}
