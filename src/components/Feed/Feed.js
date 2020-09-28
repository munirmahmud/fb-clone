import React, {useEffect, useState} from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import './Feed.css';
import Post from "../Posts/Post";
import ProfilePic1 from '../../assets/profile/profilepic1.jpg';
import postImage from '../../assets/post-img';
import {useStateValue} from "../../Api/StateProvider";
import db from "../../firebase";


const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
           setPosts(snapshot.docs.map(doc => ({
               id: doc.id,
               data: doc.data()
           })))
        });
    }, []);
    const [{user}, dispatch] = useStateValue();

    return <div className="feed">
        <StoryReel />
        <MessageSender />

        {posts.map(post => (
            <Post
                key={post.data.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                username={post.data.username}
                image={post.data.image}
            />
        ))}
    </div>
};

export default Feed;