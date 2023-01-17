import React, { useEffect, useState } from "react";
import "./NavbarSide.css";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { navbarPagesData, navbarAppsData, navbarCharts } from "./NavbarData";
const NavbarSide = ({ navbarSide, themeColor}) => {
  const [pageComp, setPageComp] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    console.log(pageComp);
  }, [pageComp]);
  return (
    <div
      className="NavbarSide"
      style={navbarSide === true ? { display: "block" } : { display: "none" }}
    >
      <div id="companyLogo">SHUBHAM JOSHI</div>
      <div className="dashboard">
        <h3>DASHBOARD</h3>
        <ul>
          <li onClick={() => {navigate("/")
            setPageComp(0);
          }}
           style={0 === pageComp ? {background:themeColor} : {background:""}}
           className={0 === pageComp ? "clickShow" : ""}
          >
            <RiShoppingBag3Line /> Ecommerce
          </li>
        </ul>
        <h3>PAGES</h3>
        <ul>
          {navbarPagesData.map((curr, id) => {
            return (
              <li
                onClick={() => {
                  navigate(curr.navigate);
                  setPageComp(curr.id);
                }}
           style={curr.id === pageComp ? {background:themeColor} : {background:""}}
                className={curr.id === pageComp ? "clickShow" : ""}
              >
                <curr.logo /> {curr.text}
              </li>
            );
          })}
        </ul>
        <h3>APPS</h3>
        <ul>
          {navbarAppsData.map((curr,id) => {
            return (
              <li
                onClick={() => {
                  navigate(curr.navigate);
                  setPageComp(curr.id);
                }}
           style={curr.id === pageComp ? {background:themeColor} : {background:""}}
                className={curr.id === pageComp ? "clickShow" : ""}
              >
                <curr.logo />
                {curr.text}
              </li>
            );
          })}
        </ul>
        <h3>CHARTS</h3>
        <ul>
          {navbarCharts.map((curr,id) => {
            return (
              <li
                onClick={() => {
                  navigate(curr.navigate);
                  setPageComp(curr.id);
                }}
           style={curr.id === pageComp ? {background:themeColor} : {background:""}}
                className={curr.id === pageComp ? "clickShow" : ""}
              >
                <curr.logo />
                {curr.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarSide;
