import React, { useState } from "react";
import "./Orders.css";
import ordersData from "./OrderData";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
const Orders = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const perPage = 12;
  // const [perPage, setPerPage] = useState(12);

  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;

  const countPages = Math.ceil(ordersData.length / perPage);
  let pages = [];
  for (let i = 1; i <= Math.ceil(ordersData.length / perPage); i++) {
    pages.push(i);
  }

  return (
    <div className="Orders">
      <h3>Page</h3>
      <h2>Orders</h2>
      <table>
        <tr>
          <th>Image</th>
          <th>Item</th>
          <th>Customer Name</th>
          <th>Total Amount</th>
          <th>Status</th>
          <th>Order ID</th>
          <th>Location</th>
        </tr>
        {ordersData.slice(firstPage, lastPage).map((curr) => {
          return (
            <tr>
              <td>
                <img
                  src={curr.ProductImage}
                  width="70px"
                  id="productImg"
                  alt="Product Img"
                />
              </td>
              <td>{curr.OrderItems}</td>
              <td>{curr.CustomerName}</td>
              <td>{curr.TotalAmount}</td>
              <td>
                <p
                  style={{
                    backgroundColor: curr.StatusBg,
                    padding: "5px",
                    borderRadius: "20px",
                    color: "white",
                  }}
                >
                  {curr.Status}
                </p>
              </td>
              <td>{curr.OrderID}</td>
              <td>{curr.Location}</td>
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
          {currentPage} of {countPages} pages ({ordersData.length} items){" "}
        </p>
      </div>
    </div>
  );
};

export default Orders;
