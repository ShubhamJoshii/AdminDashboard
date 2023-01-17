import React, { useState } from "react";
import employeesData from "./EmployeeData";
import "./Employees.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
const Employees = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const perPage = 12;
  // const [perPage, setPerPage] = useState(12);

  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;

  const countPages = Math.ceil(employeesData.length / perPage);
  let pages = [];
  for (let i = 1; i <= Math.ceil(employeesData.length / perPage); i++) {
    pages.push(i);
  }
  return (
    <div className="Employees">
      <h3>Page</h3>
      <h2>Employees</h2>
      <h1 id="searchDiv">
        <input type="search" name="search" id="search" placeholder={`Search`} />
      </h1>
      <table>
        <tr>
          <th>Employee ID</th>
          <th>Employee</th>
          <th>Designation</th>
          <th>Country</th>
          <th>Hire Date</th>
          <th>Reports To</th>
        </tr>
        {employeesData.slice(firstPage, lastPage).map((curr) => {
          return (
            <tr>
              <td>{curr.EmployeeID}</td>
              <td id="employeeName">
                <img src={curr.EmployeeImage} alt="EmployeeImg" width="45px" />
                <p>{curr.Name}</p>
              </td>
              <td>{curr.Title}</td>
              <td>
                <HiOutlineLocationMarker id="locationLogo" />
                {curr.Country}
              </td>
              <td>{curr.HireDate}</td>
              <td>{curr.ReportsTo}</td>
              <td></td>
            </tr>
          );
        })}
      </table>
      <div className="pagesBtnContainer">
        <div>
          <AiFillStepBackward
            onClick={() => {
              setcurrentPage(1);
            }}
          />
          <IoIosArrowBack
            onClick={() => {
              setcurrentPage(currentPage - 1);
            }}
          />
          {pages.map((curr, index) => {
            return (
              <button
                onClick={() => {
                  setcurrentPage(curr);
                }}
                key={index}
                className={curr === currentPage ? "active" : ""}
              >
                {curr}
              </button>
            );
          })}
          <MdOutlineNavigateNext
            onClick={() => {
              setcurrentPage(currentPage + 1);
            }}
          />
          <AiFillStepForward
            onClick={() => {
              setcurrentPage(countPages);
            }}
          />
        </div>
        <p>
          {currentPage} of {countPages} pages ({employeesData.length} items){" "}
        </p>
      </div>
    </div>
  );
};

export default Employees;
