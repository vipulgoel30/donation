import React from "react";
import Logo from "../Logo";
import ham from "../../images/ham.png";
import User from "../../images/user-interface.png";
import dummyImage from '../../images/dummy.webp'
import { Link } from "react-router-dom";

const Navbar = () => {
  // function Menu(e){
  //   let list = document.querySelector('ul');
  //   e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  // }

  return (
    <>
      {/* <div className="flex flex-row sm:flex-col md:flex-row bg-blue-200 sm:bg-green-600 md:bg-red-400 border-b-4 drop-shadow-lg justify-between sm:justify-start md:justify-between "> */}
      <div className="flex flex-row sm:flex-col md:flex-row border-b-4 drop-shadow-lg justify-between sm:justify-start md:justify-between ">
        <Link to="/">
          <div className="flex flex-row m-4">
            <Logo dimension={2} />
            <p className="flex items-center font-bold text-xl justify-between sm:justify-start md:justify-between mx-3 ">
              DoNation
            </p>
          </div>
        </Link>
        <span className="right-0 text-3xl cursor-pointer mx-2 md:hidden">
          <img src={ham} alt="" />
        </span>

        <div className="flex justify-between sm:justify-start md:justify-between ">
          <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <Link to="/">
              <li className="hidden lg:px-2 sm:block text-lg font-semibold  relative after:absolute after:content-[''] after:w-full after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-gradient1a after:to-gradient1b hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-0.5 ease-in-out duration-500 ">
                Dashboard
              </li>
            </Link>
            <Link to="user/money">
              <li className="hidden lg:px-2 sm:block text-lg font-semibold  relative after:absolute after:content-[''] after:w-full after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-gradient1a after:to-gradient1b hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-0.5 ease-in-out duration-500 ">
                Donate Money
              </li>
            </Link>
            <Link to="user/donate">
              <li className="hidden lg:px-2 sm:block text-lg font-semibold  relative after:absolute after:content-[''] after:w-full after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-gradient1a after:to-gradient1b hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-0.5 ease-in-out duration-500 ">
                Other Donations
              </li>
            </Link>
            <Link to="user/donations">
              <li className="hidden lg:px-2 sm:block text-lg font-semibold  relative after:absolute after:content-[''] after:w-full after:-bottom-[.2rem]  after:-left-full after:h-[.2rem] after:hidden  after:bg-gradient-to-r after:from-gradient1a after:to-gradient1b hover:after:left-0 after:transition-all after:ease-in-out after:duration-500 hover:after:block hover:translate-x-0.5 ease-in-out duration-500 ">
                Track Donation
              </li>
            </Link>
            <Link to="user/profile">
                <img
                src={ dummyImage}
                className="w-12 h-12 rounded-full mx-4 cursor-pointer"
                alt="Ngo logo"
              />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
