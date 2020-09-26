import React from "react";
import './Post.css';
import {Avatar} from "@material-ui/core";


const Post = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic} className={"post-avatar"} />
                <div className="post-top-info">
                    <h4>{username}</h4>
                    {/*<p>{ new Date(timestamp?.toDate()).toUTCString() }</p>*/}
                    <p>TimeStamp...</p>
                </div>

                <div className="post-bottom">
                    <p>{message}</p>
                </div>

                <div className="post-image">
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    )
};

export default Post;