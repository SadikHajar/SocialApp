import React from 'react';
import "./Topbar.css";
import { Search, Person,Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          SadikSocial
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/> {/* Capitalize 'Search' */}
          <input placeholder="Search for friend, post, or video" className="searchInput" /> {/* Correct 'input' */}
        </div>
      </div>
      <div className="topbarRight">
        <div className='topbarLinks'>
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBage">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBage">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBage">3</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
