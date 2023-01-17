import React from 'react'
import "./UserProfile.css"
import avatar from "../Data/avatar.jpg"
import {MdOutlineSecurity} from "react-icons/md";
import {BiTask} from "react-icons/bi";
import {RiProfileLine,RiCloseCircleLine} from "react-icons/ri";
const UserProfile = ({userProfile,setUserProfile, themeColor}) => {
  return (
    <div id='UserProfile' style={userProfile === true ?{display:"block"}:{display:"none" }}>
        <p id="userProfileCross" style={{marginBottom:"20px"}}>User Profile <RiCloseCircleLine  onClick={()=>setUserProfile(false)}/></p>
        <div id='userData'>
            <img src={avatar} alt="userDp" width="110px"/>
            <div>
                <h3>Shubham Joshi</h3>
                <h4>Admin</h4>
                <p>shubhamjoshii676@gmail.com</p>
            </div>
        </div>
        <div className='profileTopic'>
            <RiProfileLine style={{background:"#E5FAFB",color:"#03C9D7"}}/>
            <div>
                <h3>My Profile</h3>
                <p>Account Settings</p>
            </div>
        </div>
        <div className='profileTopic'>
            <MdOutlineSecurity  style={{background:"#EBFAF2",color:"#00C292"}}/>
            <div>
                <h3>My Indox</h3>
                <p>Messages & Emails</p>
            </div>
        </div>
        <div className='profileTopic'>
            <BiTask  style={{background:"#FEC90F",color:"#FFEECA"}}/>
            <div>
                <h3>My Tasks</h3>
                <p>To-do and Daily Tasks</p>
            </div>
        </div>
        <button style={{background:themeColor}}>Logout</button>
    </div>
  )
}

export default UserProfile