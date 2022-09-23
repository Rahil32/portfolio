import React from "react";
import {Link} from "react-scroll"
//()-maping func. ()-arrow func. {}-destructuring

const Navbar = () => {
  const array = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Content",
    },
    {
      id: 4,
      link: "Technologies",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-center
    w-full h-20 bg-white px-4 fixed"
    >
      <div>
        <Link
          to="Home"
          smooth
          duration={500}
          className="ml-3 text-3xl font-bold text-amber-800 font  hover:text-amber-600 cursor-pointer font-style"
        >
          Pranshuta
        </Link>
      </div>

      <ul className="hidden md:flex">
        {array.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-base cursor-pointer capitalize font-medium
            text-amber-800 font  hover:text-amber-600 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      </div>
  );
};

export default Navbar;
