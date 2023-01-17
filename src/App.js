import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import Setting from "./Setting/Setting";
import Navbar from "./Navbar/Navbar";
import Orders from "./Orders/Orders";
import NavbarSide from "./NavbarSide/NavbarSide";
import Ecommerce from "./Ecommerce/Ecommerce";
import Customer from "./Customers/Customer";
import Employees from "./Employees/Employees";
import Lines from "./Lines/Lines";
import Areas from "./Area/Area";
import ColorPicker from "./ColorPicker/ColorPicker";
import Bars from "./Bar/Bar";
import Pies from "./Pie/Pie";
import Calendar from "./Calendar/Calendar";
const App = () => {
  const [navbarSide, setNavbarSide] = useState(true);
  const [settingShow, setSettingShow] = useState(false);
  const [themeColor,setThemeColor] = useState("#03a9f4");
  const [darkLightTheme , setDarkLightTheme] = useState(true);
  useEffect(() => {
    console.log(navbarSide);
  }, [navbarSide]);

  useEffect(() => {
    let a = document.getElementsByClassName("Setting")[0];
    settingShow === true
      ? (a.style.display = "block")
      : (a.style.display = "none");
    // console.log()
  }, [settingShow]);

  return (
    <div className={darkLightTheme === true ? "DarkMode" : "LightMode"}>
      <BrowserRouter>
        <Navbar setNavbarSide={setNavbarSide} navbarSide={navbarSide} themeColor={themeColor}  />
        <NavbarSide navbarSide={navbarSide} themeColor={themeColor} />
        <Setting setSettingShow={setSettingShow} settingShow={settingShow} setDarkLightTheme={setDarkLightTheme} setThemeColor={setThemeColor} themeColor={themeColor}/>
        {/* <Pages setNavbarSide={setNavbarSide} navbarSide={navbarSide}/> */}
        <AiOutlineSetting
          id="settingLogo"
          style={{background:themeColor}}
          onClick={() => {
            setSettingShow(!settingShow);
          }}
        />
        <div className={navbarSide === true ? "Responsive82" : "Responsive100"} >
          <Routes>
            <Route path="/" element={<Ecommerce themeColor={themeColor}/>} />
            <Route path="/AdminDashboard" element={<Ecommerce themeColor={themeColor}/>} />
            <Route path="/ecommerce" element={<Ecommerce themeColor={themeColor}/>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/ColorPicker" element={<ColorPicker />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/lines" element={<Lines />} />
            <Route path="/bars" element={<Bars />} />
            <Route path="/pie" element={<Pies />} />
            <Route path="/calendar" element={<Calendar />} />
            {/* <Route path="/" element={} /> */}
            {/* <Route path="/" element={} /> */}
            {/* <Route path="/" element={} /> */}
          </Routes>
          <p  id="allRightReserved"

          >
            All Right Reseved @ 2023 by ShubhamJoshii.com
          </p>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
