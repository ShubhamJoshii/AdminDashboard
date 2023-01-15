import React from 'react'
import "./Orders.css"
import ordersData from "./OrderData"
const Orders = () => {
  return (
    <div className='Orders'>
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
          {
            ordersData.slice(0,12).map((curr)=>{
              return(
                <tr>
                  <td><img src={curr.ProductImage} width="70px" id='productImg' alt="Product Img" /></td>
                  <td>{curr.OrderItems}</td>
                  <td>{curr.CustomerName}</td>
                  <td>{curr.TotalAmount}</td>
                  <td ><p style={{backgroundColor:curr.StatusBg, padding:"5px", borderRadius:"20px" , color:"white"}}>{curr.Status}</p></td>
                  <td>{curr.OrderID}</td>
                  <td>{curr.Location}</td>
                </tr>
              )
            })
          }
        </table>
    </div>
  )
}

export default Orders