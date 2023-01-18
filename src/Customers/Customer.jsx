import React, { useState } from "react";
import "./Customer.css";
import customersData from "./CustomerData";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
const Customer = () => {
  const [currentPage, setcurrentPage] = useState(1);
  // const [perPage, setPerPage] = useState(12);
  const perPage = 12;
  let i = 0;
  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;
  const countPages = Math.ceil(customersData.length / perPage);

  let pages = [];
  for (let i = 1; i <= Math.ceil(customersData.length / perPage); i++) {
    pages.push(i);
  }

  const selectAllCustomer = ()=>{
    let a = document.getElementsByName("checkCustomer");
    if(i%2 === 0){
      for (let i = 0;i< a.length;i++){
        if(a[i].type === "checkbox"){
          a[i].checked = true;
        }
      }
      i++;
    }else{
      for (let i = 0;i< a.length;i++){
        if(a[i].type === "checkbox"){
          a[i].checked = false;
        }
      }
      i++;
    }
  }
  return (
    <div className="Customers">
      <h3>Page</h3>
      <h2>Customers</h2>
      <table>
        <tr>
          <th>
            <input type="checkbox" name="checkCustomer" onClick={selectAllCustomer}/>
          </th>
          <th>Name</th>
          <th>Project Name</th>
          <th>Status</th>
          <th>Weeks</th>
          <th>Budget</th>
          <th>Location</th>
          <th>Customer ID</th>
        </tr>
        {customersData.slice(firstPage, lastPage).map((curr) => {
          return (
            <tr>
              <td>
                <input
                  type="checkbox"
                  value={curr.CustomerID}
                  id="checkBoxCustomer"
                  name="checkCustomer"
                />
              </td>
              <td id="customerData">
                <img
                  src={curr.CustomerImage}
                  className="CustomerImg"
                  alt="CustomerImg"
                  width="35px"
                />
                <div className="customerName">
                  <p>{curr.CustomerName}</p>
                  <p>{curr.CustomerEmail}</p>
                </div>
              </td>
              <td>{curr.ProjectName}</td>
              <td id="customerStatus">
                <div
                  style={{
                    backgroundColor: curr.StatusBg,
                  }}
                ></div>
                <p>{curr.Status}</p>
              </td>
              <td>{curr.Weeks}</td>
              <td>{curr.Budget}</td>
              <td>{curr.Location}</td>
              <td>{curr.CustomerID}</td>
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
          {currentPage} of {countPages} pages ({customersData.length} items){" "}
        </p>
      </div>
    </div>
  );
};

export default Customer;
