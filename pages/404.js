import Link from "next/link";
import Container from "../components/Container";

export default function Custom404() {
  return (
    <Container>
      <div className="items-center h-screen w-full justify-center grid text-amber-900">
        <div className="flex gap-5 items-center text-xl">
          <h1 className="border-r-2 border-amber-700 pr-4">404</h1>
          <p className="pl-4">Sorry, Page not Found!</p>
        </div>
        <Link href="/">
          <button className="rounded bg-amber-900 text-amber-100 px-3 py-2 font-semibold">
            Back Home
          </button>
        </Link>
      </div>
    </Container>
  );
}
