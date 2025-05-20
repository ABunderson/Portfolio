import Link from 'next/link';

type NavProps = {
  current: boolean;
};

export const NavDropDown = ({ current }: NavProps) => {
    const bold: string = current ? ' font-bold' : ''
  return (
    <li className="relative group px-2">
      <button className={"flex items-center hover:text-black" + bold}>
        Projects
      </button>

      <ul className="absolute left-0 mt-0 w-24 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-50">
        <li>
          <Link href="/projects" className="block px-4 py-2 hover:bg-gray-100">
            All
          </Link>
        </li>
        <li>
          <Link href="/current" className="block px-4 py-2 hover:bg-gray-100">
            Current
          </Link>
        </li>
      </ul>
    </li>
  );
};
