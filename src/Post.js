import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import PublicIcon from '@material-ui/icons/Public';

const Post = forwardRef(({profilePic, image, username,timestamp,message}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__top">
                  <Avatar className="post__avatar"
                  src={profilePic} />

                  <div className="post__topInfo">
                        <h3>{username}</h3>
                        
                        <p>{new Date(timestamp?.toDate()).toUTCString()}·<PublicIcon/></p>
                  </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                 <img src={image} alt="" />
            </div>

            <div className="post__options">
                 <div className="post__option">
                     <ThumbUpIcon/>
                     <p>Like</p>
                 </div>
                 <div className="post__option">
                     <ChatBubbleOutlineIcon/>
                     <p>Comment</p>
                 </div>
                 <div className="post__option">
                     <NearMeIcon/>
                     <p>Share</p>
                 </div>
                 <div className="post__option">
                     <Avatar src={profilePic} />
                     <ArrowDropDownRoundedIcon fontSize="large"/>
                 </div>
            </div>
        </div>
    )
})
/*{new Date(timestamp?.toDate()).toUTCString()}*/
export default Post;
