import React from 'react';
import "./Rightbar.css";
import Online from '../../components/online/Online';

import { Users } from "../../dummyData";
export default function Rightbar({profile}){
    return(
        <div className='rightbar'>
            <div className="rightbarWrapper ">
                <div className="birthdayContainer">
                <img className="birthdayImg " src="assets/gift.png" alt="" />
                <span className="birthdayText">
                    <b>Youssef Banani </b>and <b>3 other friends</b> have a birthday today.
                </span>
            </div>
            <img src="assets/ad.png" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map(u=>(
                    <Online  key={u.id} user={u}/>
                ))}
            </ul>
            </div>
        </div>
    )
}