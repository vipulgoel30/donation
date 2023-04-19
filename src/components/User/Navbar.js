import React from "react";
import Logo from "../Logo";
import ham from "../../images/ham.png";
import User from "../../images/user-interface.png";
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
        <span class="right-0 text-3xl cursor-pointer mx-2 md:hidden">
          <img src={ham} alt="" />
        </span>

        <div className="flex justify-between sm:justify-start md:justify-between ">
          <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <Link to="/">
              <li className="mx-4 -my-2 sm:m-2 md:mx-4 md:-my-2 font-semibold hover:underline cursor-pointer">
                Dashboard
              </li>
            </Link>
            <Link to="user/money">
              <li className="mx-4 -my-2 sm:m-2 md:mx-4 md:-my-2 font-semibold hover:underline cursor-pointer">
                Donate Money
              </li>
            </Link>
            <Link to="user/donate">
              <li className="mx-4 -my-2 sm:m-2 md:mx-4 md:-my-2 font-semibold hover:underline cursor-pointer">
                Other Donations
              </li>
            </Link>
            <Link to="user/donations">
              <li className="mx-4 -my-2 sm:m-2 md:mx-4 md:-my-2 font-semibold hover:underline cursor-pointer">
                Track Donation
              </li>
            </Link>
            <Link to="user/profile">
              <li className="mx-4 -my-2 sm:m-2 md:mx-4 md:-my-2 font-semibold hover:underline cursor-pointer">
                <img src={User} className="w-6" alt="" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
