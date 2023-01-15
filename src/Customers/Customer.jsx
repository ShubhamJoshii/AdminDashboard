import React, { useEffect, useState } from "react";
import "./Customer.css";
import customersData from "./CustomerData";
const Customer = () => {
  const [CustomerData,setCustomerData] = useState([])
  const [pageNo,setPageNo] = useState(0)
  const handle = () => {
    console.log(customersData);
    // setPageNo()
  };

  useEffect(()=>{
    setCustomerData(customersData)
  })
  const pageNoIncrease = (e)=>{
    setPageNo(Number(e.target.name))
    // console.log(typeof(e.target.name))
  }
  return (
    <div className="Customers">
      <h3>Page</h3>
      <h2>Customers</h2>
      <table>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>Project Name</th>
          <th>Status</th>
          <th>Weeks</th>
          <th>Budget</th>
          <th>Location</th>
          <th>Customer ID</th>
        </tr>
        {CustomerData.slice(pageNo,pageNo+12).map((curr) => {
          return (
            <tr>
              <td>
                <input
                  type="checkbox"
                  name={curr.CustomerID}
                  id="checkBoxCustomer"
                />
              </td>
              <td id="customerData">
                <img
                  src={curr.CustomerImage}
                  className="CustomerImg"
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
                  // id="customerStatus"
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
        <div className="Pagination">
          <button onClick={pageNoIncrease} name="0">1</button>
          <button onClick={pageNoIncrease} name="12">2</button>
          <button onClick={pageNoIncrease} name="24">3</button>
          <button onClick={pageNoIncrease} name="36">4</button>
        </div>
      <button onClick={handle}>Click Me</button>
    </div>
  );
};

export default Customer;
