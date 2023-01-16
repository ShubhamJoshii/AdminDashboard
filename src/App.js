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
    <div>
      <BrowserRouter>
        <Navbar setNavbarSide={setNavbarSide} navbarSide={navbarSide} />
        <NavbarSide navbarSide={navbarSide} />
        <Setting setSettingShow={setSettingShow} />
        {/* <Pages setNavbarSide={setNavbarSide} navbarSide={navbarSide}/> */}
        <AiOutlineSetting
          id="settingLogo"
          onClick={() => {
            setSettingShow(!settingShow);
          }}
        />
        <div
          style={
            navbarSide === true
              ? {
                  width: "82vw",
                  position: "fixed",
                  left: "19vw",
                  top: "60px",
                  background: "#20232A",
                  height: "94vh",
                  padding: "10px 20px",
                  overflow: "scroll",
                }
              : {
                  width: "100vw",
                  position: "block",
                  left: "0vw",
                  top: "60px",
                  background: "#20232A",
                  height: "94vh",
                  padding: "10px 20px",
                }
          }
        >
          <Routes>
            <Route path="/" element={<Ecommerce />} />
            <Route path="/AdminDashboard" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
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
          <p
            style={{
              color: "white",
              margin: "100px 0px 30px 0px",
              textAlign: "center",
              width: "100%",
            }}
          >
            All Right Reseved @ 2023 by ShubhamJoshii.com
          </p>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
