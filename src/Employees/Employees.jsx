import React from 'react'
import employeesData from './EmployeeData';
import "./Employees.css"
import {HiOutlineLocationMarker,HiOutlineSearch} from "react-icons/hi"
const Employees = () => {
  return (
    <div className='Employees'>
        <h3>Page</h3>
        <h2>Employees</h2>
        <h1 id='searchDiv'>

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
          {
            employeesData.slice(0,10).map((curr)=>{
              return(
                <tr>
                  <td>{curr.EmployeeID}</td>
                  <td id='employeeName'><img src={curr.EmployeeImage} width="45px"/><p>{curr.Name}</p></td>
                  <td>{curr.Title}</td>
                  <td><HiOutlineLocationMarker id="locationLogo"/>{curr.Country}</td>
                  <td>{curr.HireDate}</td>
                  <td>{curr.ReportsTo}</td>
                  <td></td>
                </tr>
              )
            })
          }
        </table>
    </div>
  )
}

export default Employees