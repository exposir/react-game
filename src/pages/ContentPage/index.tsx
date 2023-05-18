import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="md:hidden block px-4 py-2 my-2 text-white bg-blue-500 rounded"
        onClick={toggleNav}
        // onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block md:relative flex-col space-y-2 absolute z-10 bg-white`}
      >
        <Link
          className="block px-4 py-2 bg-blue-500 text-white rounded"
          to="/content"
        >
          Home
        </Link>
        <Link
          className="block px-4 py-2 bg-blue-500 text-white rounded"
          to="/content/about"
        >
          About
        </Link>
        <Link
          className="block px-4 py-2 bg-blue-500 text-white rounded"
          to="/content/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

const Content = () => (
  <div className="flex flex-col flex-grow  md:flex-row  w-full">
    <nav className="md:w-64 md:h-full bg-gray-100 border-r-2 border-gray-200 p-4">
      <Nav />
    </nav>
    <main className="flex-grow flex items-center justify-center p-4 md:p-8 w-full overflow-auto">
      <Outlet />
    </main>
  </div>
);

export default Content;
