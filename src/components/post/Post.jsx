import React from 'react'
import "./Post.css";
import {MoreVert}from '@mui/icons-material';
export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/14.jpeg" alt="" />
                    <span className="postUsername">Hajar Sadik</span>
                    <span className="postUsername">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post:</span>
                <img className="postImg"  src="assets/person/12.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" alt="" />
                    <img  className="likeIcon"  src="assets/heart.png" alt="" />
                    <span className="postLikeCounter">1M people like it</span>
                </div>
                <div className="postBottomRight">
                <span className="postCommentText">299k comments</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
