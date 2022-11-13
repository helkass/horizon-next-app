import { NextResponse } from "next/server";

export default function middleware(req) {
  const url = req.url;
  const base = process.env.BASE_URL;

  //   while access /api...
  // if (url.includes("/api")) {
  //   return NextResponse.redirect(`${base}`);
  // }

  return NextResponse.next();
}
