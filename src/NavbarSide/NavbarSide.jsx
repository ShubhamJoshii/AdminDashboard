import React from "react";
import "./NavbarSide.css";
import { RiShoppingBag3Line } from "react-icons/ri";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlinePieChart,
} from "react-icons/ai";
import { FaUsers, FaRegEdit} from "react-icons/fa";
import { BsKanban } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
const NavbarSide = ({navbarSide}) => {
  let navigate = useNavigate();
  return (
    <div className="NavbarSide" style={navbarSide === true ? {display:"block"}:{display:"none"} }>
      <div id="companyLogo">SHUBHAM JOSHI</div>
      <div className="dashboard">
        <h3>DASHBOARD</h3>
        <ul>
          <li onClick={()=>navigate("/")}>
            <RiShoppingBag3Line /> Ecommerce
          </li>
        </ul>
        <h3>PAGES</h3>
        <ul>
          <li onClick={()=>navigate("/orders")}>
            <AiOutlineShoppingCart /> Orders
          </li>
          <li onClick={()=>navigate("/employees")}>
            <FaUsers />
            Employees
          </li>
          <li onClick={()=>navigate("/customers")}>
            <AiOutlineUser />
            Customers
          </li>
        </ul>
        <h3>APPS</h3>
        <ul>
          <li onClick={()=>navigate("/calendar")}>
            <AiOutlineCalendar />
            Calendar
          </li>
          <li onClick={()=>navigate("/")}>
            <BsKanban />
            Kanban
          </li>
          <li onClick={()=>navigate("/")}>
            <FaRegEdit />
            Editor
          </li>
          <li onClick={()=>navigate("/ColorPicker")}>
            <BiColorFill />
            Color-Picker
          </li>
        </ul>
        <h3>CHARTS</h3>
        <ul>
          <li onClick={()=>navigate("/lines")}>
            <SlGraph />
            Line
          </li>
          <li onClick={()=>navigate("/areas")}>
            <AiOutlineAreaChart />
            Area
          </li>
          <li onClick={()=>navigate("/bars")}>
            <AiOutlineBarChart />
            Bar
          </li>
          <li onClick={()=>navigate("/Pie")}>
            <AiOutlinePieChart />
            Pie
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarSide;
