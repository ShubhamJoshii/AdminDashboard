import React from "react";
import "./Notifications.css";
import avatar from "../Data/avatar.jpg";
import avatar2 from "../Data/avatar2.jpg";
import avatar3 from "../Data/avatar3.png";
import avatar4 from "../Data/avatar4.jpg";
const Data = [
  {
    DP: avatar,
    textT: "Shubham Joined the Team!",
    texttd: "Congratulate him",
  },
  {
    DP: avatar2,
    textT: "New message received",
    texttd: "Anupam sent you New Message",
  },
  {
    DP: avatar3,
    textT: "New Payment received",
    texttd: "Check your earnings",
  },
  {
    DP: avatar4,
    textT: "Rajender completed tasks",
    texttd: "Assign her new tasks",
  }
];
const Notifications = ({Notification,themeColor}) => {
  return (
    <div id="Notifications" style={Notification === true ? {display:"block"} : {display:"none"}}>
      <div id="firstLine">
        <h2>Notifications</h2>
        <p>5 New</p>
      </div>
      <div id="NotificationsAllCards">
        {Data.map((curr) => {
          return (
            <div id="notificationCards">
              <img src={curr.DP} width="60px" alt="avatarDP" />
              <div>
                <h2>{curr.textT}</h2>
                <h3>{curr.texttd}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <button style={{backgroundColor:themeColor}} id="notificationBtn">See all Notifications</button>
    </div>
  );
};

export default Notifications;
