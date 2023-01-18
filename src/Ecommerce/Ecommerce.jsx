import React from "react";
import "./Ecommerce.css";
import { MdSupervisedUserCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { FaSyncAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { RiProfileLine} from "react-icons/ri";
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
      <div id="recentTranscation">
        <h2>Recent Transactions</h2>
        <div className="profileTopicEcomm">
          <div id="profileContainer">
            <RiProfileLine
              style={{ background: "#E5FAFB", color: "#03C9D7" }}
            />
            <div>
              <h3>UPI Transfer</h3>
              <p>Money Added</p>
            </div>
          </div>
          <p id="priceTranscation" style={{ color: "#1DA348" }}>
            + ₹34,000
          </p>
        </div>
        <div className="profileTopicEcomm">
          <div id="profileContainer">
            <MdOutlineSecurity
              style={{ background: "#EBFAF2", color: "#00C292" }}
            />
            <div>
              <h3>Wallet</h3>
              <p>Bill Payment</p>
            </div>
          </div>
          <p id="priceTranscation" style={{ color: "red" }}>
            - ₹3,250
          </p>
        </div>
        <div className="profileTopicEcomm">
          <div id="profileContainer">
            <RiProfileLine
              style={{ background: "#E5FAFB", color: "#03C9D7" }}
            />
            <div>
              <h3>Credit Card</h3>
              <p>Money reversed</p>
            </div>
          </div>
          <p id="priceTranscation" style={{ color: "#1DA348" }}>
            + ₹20,000
          </p>
        </div>
        <div className="profileTopicEcomm">
          <div id="profileContainer">
            <BiTask style={{ background: "#FEC90F", color: "#FFEECA" }} />
            <div>
              <h3>Bank Transfer</h3>
              <p>Money Added</p>
            </div>
          </div>
          <p id="priceTranscation" style={{ color: "#1DA348" }}>
            + ₹14,000
          </p>
        </div>
        <div className="profileTopicEcomm">
          <div id="profileContainer">
            <BiTask style={{ background: "#FFF4E5", color: "#E46A76" }} />
            <div>
              <h3>Refund</h3>
              <p>Payment Sent</p>
            </div>
          </div>
          <p id="priceTranscation" style={{ color: "red" }}>
            - ₹4,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
