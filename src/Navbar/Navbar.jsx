import React from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsChatLeft, BsBell } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import Avatar from "../Data/avatar.jpg";
const Navbar = ({ setNavbarSide, navbarSide,themeColor }) => {
  return (
    <>
      <div
        className={
          navbarSide === true ? "Navbar navbarResponsive82" : "Navbar navbarResponsive100"
        }
        >
        <RxHamburgerMenu
          style={{color:themeColor}}
          className="navbarLogo burger"
          onClick={() => setNavbarSide(!navbarSide)}
        />
        <ul
          style={{color:themeColor}}
        >
          <li>
            <AiOutlineShoppingCart className="navbarLogo" />
          </li>
          <li>
            <BsBell className="navbarLogo" />
          </li>
          <li>
            <BsChatLeft className="navbarLogo" />
          </li>
          <li>
            <img src={Avatar} alt="DP" width="35px" />
            Hi, Shubham <RiArrowDownSLine />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
