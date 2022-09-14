import React from "react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="w-full p-5">
      <div className="max-w-[1250px] mx-auto flex justify-between items-center">
        <div className="rounded-full border-2 border-black w-fit h-8 px-2 cursor-pointer">
          DELTA
        </div>
        <div className="hidden flex text-lg gap-4 capitalize sm:flex sm:text-xl md:gap-8">
          <Link to="/home" className="liItem">
            home
          </Link>
          <Link to="/services" className="liItem">
            services
          </Link>
          <Link className="liItem">contacts</Link>
          <Link className="liItem">about</Link>
        </div>
        {collapsed ? (
          <AiOutlineCloseCircle
            onClick={() => setCollapsed(!collapsed)}
            size={25}
            className="block sm:hidden cursor-pointer"
          />
        ) : (
          <BiMenu
            onClick={() => setCollapsed(!collapsed)}
            size={25}
            className="block sm:hidden cursor-pointer"
          />
        )}
      </div>

      <div
        className={
          collapsed
            ? `sm:hidden absolute top-0 left-0 w-1/2 h-full bg-black shadow-md pt-8 flex flex-col justify-start items-center capitalize duration-500 ease-out}`
            : `hidden left-[-100%] duration-500 ease-out`
        }
      >
        <div className="mb-4 rounded-full border-2 text-white border-white w-fit h-8 px-2 cursor-pointer">
          DELTA
        </div>
        <span className="liItemMb">home</span>
        <span className="liItemMb">services</span>
        <span className="liItemMb">contacts</span>
        <span className="liItemMb">about</span>
      </div>
    </div>
  );
}

export default Navigation;
