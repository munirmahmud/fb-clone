import React, {useState} from "react";
import './MessageSender.css';
import {Avatar} from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const MessageSender = () => {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();


      setInput("");
      setImageUrl("")
    };
    return (
        <div className="message-sender d-flex">
            <div className="message-sender-top d-flex">
                <Avatar />
                <form className={"d-flex"}>
                    <input value={input} onChange={e => setInput(e.target.value)} className={"message-sender-input"} type="text" placeholder={"What's on your mind?"} />
                    <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} type="text" placeholder={"Image URL (Optional)"} />
                    <button type={"Submit"} onClick={handleSubmit} hidden>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="message-sender-bottom d-flex">
                <div className="message-sender-option d-flex">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="message-sender-option d-flex">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="message-sender-option d-flex">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
};

export default MessageSender;