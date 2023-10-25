"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Param = {
  title: string;
  param: string;
};

export default function NavbarItem({ title, param }: Param) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        } m-4 hover:text-amber-600 font-semibold p-2`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
