import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import './Header.css';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = () => {
    return (
        <div className={"header d-flex"}>
            <div className={"header-left d-flex"}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook"/>

                <div className={"header-input d-flex"}>
                    <SearchIcon />
                    <input type="text" placeholder={"Search Facebook"}/>
                </div>
            </div>

            <div className={"header-middle d-flex"}>
                <div className="header-option d-flex active">
                    <HomeIcon fontSize={"large"} />
                </div>
                <div className="header-option d-flex">
                    <FlagIcon fontSize={"large"} />
                </div>
                <div className="header-option d-flex">
                    <SubscriptionsOutlinedIcon fontSize={"large"} />
                </div>
                <div className="header-option d-flex">
                    <StorefrontOutlinedIcon fontSize={"large"} />
                </div>
                <div className="header-option d-flex">
                    <SupervisedUserCircleOutlinedIcon fontSize={"large"} />
                </div>
            </div>

            <div className={"header-right d-flex"}>
                <div className="header-info d-flex">
                    <Avatar />
                    <h4>Munir</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
};

export default Header;