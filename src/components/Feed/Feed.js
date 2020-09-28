import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import './Feed.css';
import Post from "../Posts/Post";
import ProfilePic1 from '../../assets/profile/profilepic1.jpg';
import postImage from '../../assets/post-img';
import {useStateValue} from "../../Api/StateProvider";


const Feed = () => {
    const [{user}, dispatch] = useStateValue();

    return <div className="feed">
        <StoryReel />
        <MessageSender />

        <Post
            profilePic={user.photoURL}
            message={"This is awesome, I love it"}
            timestamp={'Yesterday at 12:56 AM'}
            username={user.displayName}
            image={postImage}
        />
    </div>
};

export default Feed;