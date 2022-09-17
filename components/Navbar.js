import Image from "next/image";
import { useRef, useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const listLink = useRef();
  function toggleNavbar() {
    listLink.current.classList.toggle("hidden")
  }
  return (
    <div className="py-4">
        <p
        onClick={() => {
          toggleNavbar()
        }}
          className="py-1 font-black text-3xl hover:cursor-pointer rounded-2xl text-center md:hidden"
          title="foxy4096"
        >
          🦊
        </p>
      <ul className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-2xl px-6" ref={listLink}>
        <li className="text-gray-300 px-6 hover:cursor-pointer hover:text-white">
          <a href="#">Home</a>
        </li>
        <li className="text-gray-300 px-6 hover:cursor-pointer hover:text-white">
          <a href="#about">About</a>
        </li>
        <li className="text-gray-300 px-6 hover:cursor-pointer hover:text-white">
          <a href="#work">Work</a>
        </li>
        <li className="text-gray-300 px-6 hover:cursor-pointer hover:text-white">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
