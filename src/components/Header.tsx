import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links: Record<string, string>[] = [
    { name: "Personal", path: "/personal" },
    { name: "AboutUs", path: "/aboutus" },
    { name: "Business", path: "/business" },
  ];

  return (
    <header className="mx-auto max-w-7xl w-full flex items-center justify-between py-6 lg:px-8 px-4  ">
      <div className="space-x-4 flex items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="p-1 cursor-pointer lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z" />
          </svg>
        </button>
        <Link to={"/"} className="text-xl font-bold">
          Harsh
        </Link>
      </div>

      <nav>
        <ul className="lg:flex items-center hidden  gap-8">
          {links.map((link, idx) => (
            <li key={idx} className="text-sm tracking-tight font-medium">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="secondary-button">Sign In</button>
      {isOpen && (
        <div className="fixed inset-0 bg-secondary p-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-2xl font-semibold  ">Menu</p>
            <button onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-primary"
              >
                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
              </svg>
            </button>
          </div>

          <ul className="flex flex-col items-start  gap-8">
            {links.map((link, idx) => (
              <li key={idx} className="text-lg tracking-tight font-medium">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
