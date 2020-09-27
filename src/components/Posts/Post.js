import React from "react";
import './Post.css';
import {ThumbUp, ChatBubbleOutline, AccountCircle, NearMe, ExpandMoreOutlined} from "@material-ui/icons";


const Post = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className="post">
            <div className="post-top d-flex">
                <div className={"post-avatar"}>
                    <img src={profilePic} alt=""/>
                </div>
                <div className="post-top-info">
                    <h4>{username}</h4>
                    {/*<p>{ new Date(timestamp?.toDate()).toUTCString() }</p>*/}
                    <p>TimeStamp...</p>
                </div>
            </div>


            <div className="post-bottom">
                <p>{message}</p>
            </div>

            <div className="post-image">
                <img src={image} alt=""/>
            </div>

            <div className="post-options d-flex">
                <div className="post-option d-flex">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post-option d-flex">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post-option d-flex">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post-option d-flex">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
};

export default Post;