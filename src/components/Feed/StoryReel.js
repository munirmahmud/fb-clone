import React from "react";
import './StoryReel.css';
import Story from "./Story";

//Image
import Card1 from '../../assets/img/card1.jpg';
import Card2 from '../../assets/img/card2.jpg';
import Card3 from '../../assets/img/card3.jpg';
import Card4 from '../../assets/img/card4.jpg';

import ProfilePic1 from '../../assets/profile/profilepic1.jpg';
import ProfilePic2 from '../../assets/profile/profilepic2.jpg';
import ProfilePic3 from '../../assets/profile/profilepic3.jpg';
import ProfilePic4 from '../../assets/profile/profilepic4.jpg';
import ProfilePic5 from '../../assets/profile/profilepic5.jpg';

const StoryReel = () => {
    return <div className="story-reel d-flex">
            <Story image={Card1} profileSrc={ProfilePic1} title={"Munir Mahmud"} />
            <Story image={Card2} profileSrc={ProfilePic2} title={"Hasan Kabir"} />
            <Story image={Card3} profileSrc={ProfilePic3} title={"Shahed Khan"} />
            <Story image={Card4} profileSrc={ProfilePic4} title={"Roshni"} />
            <Story image={Card1} profileSrc={ProfilePic5} title={"Raj Akand"} />
            <Story image={Card1} profileSrc={ProfilePic5} title={"Selim Khan"} />
    </div>
};

export default StoryReel;