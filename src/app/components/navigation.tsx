'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavDropDown } from './NavDropDown';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="bg-th-purple h-12 border-b-4 border-black px-4">
      <div className="flex items-center justify-between max-w-none lg:max-w-7xl h-full m-auto">
        <div></div>
        <nav className="flex items-center h-full">
          <ul className="flex items-center divide-x-2 divide-th-gray">
            <li>
              <Link href="/" className={pathname === '/' ? 'font-bold px-2' : 'px-2'}>
                Home
              </Link>
            </li>
            <NavDropDown current={pathname.startsWith('/projects') || pathname === '/current'} />
            <li>
              <Link href="/about" className={pathname === '/about' ? 'font-bold px-2' : 'px-2'}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
