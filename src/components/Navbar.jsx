import React from "react";
import { SiCoffeescript } from "react-icons/si";
import foodieFlair from "../assets/foodieflair.png";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className="fixed w-full z-10">
      {/* <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> */}
      <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-brightColor to-backgroundColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex  flex-row items-center cursor-pointer gap-2">
          <span>
            {/* <SiCoffeescript /> */}
            <img
              className="w-[120px] p-[5px]"  
              src={foodieFlair}
              alt="foodie-flair"
            />
          </span>
          <h1 className="text-xl font-semibold text-white">The Foodie Flair</h1>
        </div>
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 ">
          <a
            href="#home"
            className="group relative inline-block cursor-pointer hover:text-backgroundColor"
            smooth={true}
            duration={500}
          >
            Home
            <span className="absolute inset x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </a>
          <a
            href="#menu"
            className="group relative inline-block cursor-pointer hover:text-backgroundColor"
            smooth={true}
            duration={500}
          >
            Menu
            <span className="absolute inset x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </a>
          <a
            href="#about"
            className="group relative inline-block cursor-pointer hover:text-backgroundColor"
            smooth={true}
            duration={500}
          >
            About Us
            <span className="absolute inset x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </a>
          <a
            href="https://thefoodieflair.blogspot.com/"
            className="group relative inline-block cursor-pointer hover:text-backgroundColor"
            smooth={true}
            duration={500}
          >
            Blogs
            <span className="absolute inset x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </a>
        </nav>
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <a
            href="#home"
            className="group relative inline-block cursor-pointer hover:text-backgroundColor"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Home
            <span className="absolute inset x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </a>
          <a
            href="#menu"
            className="group relative inline-block cursor-pointer hover:text-backgroundColor"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Menu
            <span className="absolute inset x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </a>
          <a
            href="#about"
            className="group relative inline-block cursor-pointer hover:text-backgroundColor"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            About Us
            <span className="absolute inset x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </a>
          <a
            href="#blogs"
            className="group relative inline-block cursor-pointer hover:text-backgroundColor"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Blogs
            <span className="absolute inset x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
