import React from "react";
import './Story.css';

const Story = ({ image, profileSrc, title }) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <div className={"story-avatar"}>
                <img src={profileSrc} alt={title}/>
            </div>
            <h4>{title}</h4>
        </div>
    )
};

export default Story;