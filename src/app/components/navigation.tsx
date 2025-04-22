"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="bg-th-purple h-12 border-b-4 border-black">
      <div className="flex items-center justify-between max-w-none lg:max-w-7xl h-full m-auto">
        <div>
          <p>hi</p>
        </div>
        <nav className="flex items-center divide-x-2 divide-th-gray">
          <Link
            href="/"
            className={pathname === "/" ? "font-bold px-2" : "px-2"}
          >
            Home
          </Link>
          <Link
            href="/bio"
            className={pathname === "/bio" ? "font-bold px-2" : "px-2"}
          >
            Bio
          </Link>
          <Link
            href="/project/1"
            className={
              pathname.startsWith("/project/1") ? "font-bold px-2" : "px-2"
            }
          >
            Project 1
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "font-bold px-2" : "px-2"}
          >
            About
          </Link>
          <p>Projects</p>
        </nav>
      </div>
    </div>
  );
};
