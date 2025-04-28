'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="bg-th-purple h-12 border-b-4 border-black px-4">
      <div className="flex items-center justify-between max-w-none lg:max-w-7xl h-full m-auto">
        <div>
        </div>
        <nav className="flex items-center divide-x-2 divide-th-gray">
          <Link href="/" className={pathname === '/' ? 'font-bold px-2' : 'px-2'}>
            Home
          </Link>
          <Link href="/about" className={pathname === '/about' ? 'font-bold px-2' : 'px-2'}>
            About
          </Link>
          <Link href="/current" className={pathname === '/current' ? 'font-bold px-2' : 'px-2'}>
            Current Projects
          </Link>
          <Link href="/projects" className={pathname === '/projects' ? 'font-bold px-2' : 'px-2'}>
            Projects
          </Link>
          {/* <Link
            href="/project/1"
            className={
              pathname.startsWith("/project/1") ? "font-bold px-2" : "px-2"
            }
          >
            Project 1
          </Link> */}
        </nav>
      </div>
    </div>
  );
};
