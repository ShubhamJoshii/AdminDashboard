import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlinePieChart,
} from "react-icons/ai";
import { FaUsers, FaRegEdit } from "react-icons/fa";
import { BsKanban } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";

export const navbarPagesData = [
  {
    id:1,
    navigate: "/orders",
    logo: AiOutlineShoppingCart,
    text: "Orders",
},
{
      id:2,
      navigate: "/employees",
      logo: FaUsers,
      text: "Employees",
    },
    {
        id:3,
        navigate: "/customers",
        logo: AiOutlineUser,
        text: "Customers",
    },
];

export const navbarAppsData = [
    {
        id:4,
        navigate: "/calendar",
        logo: AiOutlineCalendar,
        text: "Calendar",
    },
    {
      id:5,
      navigate: "/",
      logo: BsKanban,
      text: "Kanban",
    },
    {
        id:6,
        navigate: "/",
        logo: FaRegEdit,
        text: "Editor",
    },
    {
        id:7,
        navigate: "/ColorPicker",
        logo: BiColorFill,
        text: "Color-Picker",
    },
];

export const navbarCharts = [
    {
        id:8,
        navigate: "/lines",
        logo: SlGraph,
        text: "Line",
    },
    {
        id:9,
        navigate: "/areas",
        logo: AiOutlineAreaChart,
        text: "Area",
    },
    {
        id:10,
        navigate: "/bars",
        logo: AiOutlineBarChart,
        text: "Bar",
    },
    {
        id:11,
        navigate: "/Pie",
        logo: AiOutlinePieChart,
        text: "Pie",
    },
    // {
        // id:,
        //     navigate:"",
  //     logo:,
  //     text:""
  // },
];