import React from "react";

import './Sidebar.css';
import SidebarRow from "./SidebarRow";

//Icons
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <SidebarRow src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Katherine_Maher.jpg/220px-Katherine_Maher.jpg"} title={"Munir Mahmud"} />
            <SidebarRow Icon={LocalHospitalIcon} title={"Covid-19 Information Center"} />
            <SidebarRow Icon={EmojiFlagsIcon} title={"Page"} />
            <SidebarRow Icon={PeopleIcon} title={"Friends"} />
            <SidebarRow Icon={ChatIcon} title={"Messenger"} />
            <SidebarRow Icon={StorefrontIcon} title={"Marketplace"} />
            <SidebarRow Icon={VideoLibraryIcon} title={"Videos"} />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title={"Marketplace"} />
        </aside>
    )
};

export default Sidebar;