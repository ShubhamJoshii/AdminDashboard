import React from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsChatLeft, BsBell } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import Avatar from "../Data/avatar.jpg";
const Navbar = ({setNavbarSide,navbarSide}) => {

  return (
    <>
      <div className="Navbar" style={navbarSide === true ? {width:"82vw",position:"fixed",left:"18vw"}:{width:"100vw",position:"block",left:"0vw"} }>
        <RxHamburgerMenu
          className="navbarLogo burger"
          onClick={() => setNavbarSide(!navbarSide)}
        />
        <ul>
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
