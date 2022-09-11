import React from "react";
import { TbListCheck } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="w-full h-[80px] border bg-background ">
      <div className="flex justify-between p-4 items-center">
        <div className="text-xl flex">
          <img src={require("../assets/logo.png")} className='w-[30px] h-[30px] mr-2' />
          <div className="whitespace-nowrap">Centralized Catalog </div>
        </div>
        <div className="flex ">
          <input
            type="text"
            placeholder="Search"
            className="rounded-[5px] p-1 lg:min-w-[400px] hidden md:block"
          />
          <ul className=" items-center hidden md:flex">
            <li>Tools</li>
            <li>Catalogs</li>
            <li>
              <TbListCheck className="w-[20px] h-[20px]"/>
            </li>
            <li>
              <IoMdNotificationsOutline className="w-[20px] h-[20px]"/>
            </li>
            <li>
              <IoExitOutline className="w-[20px] h-[20px]" />
            </li>
          </ul>

          <ul className="flex items-center md:hidden">
            <li><AiOutlineMenu className="w-[20px] h-[20px]" /></li>
          {/* <li>Tools</li>
            <li>Catalogs</li>
            <li>
              <TbListCheck className="w-[20px] h-[20px]"/>
            </li>
            <li>
              <IoMdNotificationsOutline className="w-[20px] h-[20px]"/>
            </li>
            <li>
              <IoExitOutline className="w-[20px] h-[20px]" />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
