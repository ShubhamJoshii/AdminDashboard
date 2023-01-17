import React from "react";
import "./Ecommerce.css";
import { MdSupervisedUserCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { FaSyncAlt } from "react-icons/fa";
const Ecommerce = ({ themeColor }) => {
  return (
    <div className="Ecommerce">
      <div id="firstLine">
        <div id="Earnings">
          <div id="EarningFirst">
            <div>
              <h3>Earnings</h3>
              <h2>₹ 10,20,000</h2>
            </div>
            <p style={{ background: themeColor }}>₹</p>
          </div>
          <button style={{ background: themeColor }}>Download</button>
        </div>
        <div id="Assets">
          <div className="AssetsCards">
            <MdSupervisedUserCircle id="AssetLogo1" />
            <h2>
              39,354 <span id="span1">-4%</span>
            </h2>
            <h3>Customers</h3>
          </div>
          <div className="AssetsCards">
            <AiOutlineShoppingCart id="AssetLogo2" />
            <h2>
              4,396 <span id="span2">+23%</span>
            </h2>
            <h3>Customers</h3>
          </div>
          <div className="AssetsCards">
            <BiBarChart id="AssetLogo3" />
            <h2>
              42,339 <span id="span3">+38%</span>
            </h2>
            <h3>Customers</h3>
          </div>
          <div className="AssetsCards">
            <FaSyncAlt id="AssetLogo4" />
            <h2>
              39,354 <span id="span4">-12%</span>
            </h2>
            <h3>Customers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
