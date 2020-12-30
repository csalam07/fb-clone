import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import Badge from '@material-ui/core/Badge';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt="fb-logo" />
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>

            <div className="header__center">
                <div className="header__option
                header__option--active">
                     <HomeIcon fontSize="large"/>     
                </div>

                <div className="header__option">
                <Badge badgeContent={9} color="error">
                     <OndemandVideoRoundedIcon fontSize="large"/>     
                </Badge>
                </div>

                <div className="header__option">
                     <StorefrontOutlinedIcon fontSize="large"/>     
                </div>

                <div className="header__option">
                
                     <SupervisedUserCircleIcon fontSize="large"/>     
                
                </div>

                <div className="header__option">
                     <SportsEsportsRoundedIcon fontSize="large"/>  
                </div>

            </div>

            <div className="header__right">
                <div className="header__info">
                      <Avatar src={user.photoURL}
                      alt="shahbaz"/>
                      <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon fontSize="large"/>
                </IconButton>

                <IconButton>
                    <Badge badgeContent={7} color="error">
                        <ForumRoundedIcon />
                    </Badge>    
                </IconButton>

                <IconButton>
                    <Badge badgeContent={4} color="error">
                        <NotificationsActiveIcon />
                     </Badge>    
                </IconButton>

                <IconButton>
                    <ArrowDropDownRoundedIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
