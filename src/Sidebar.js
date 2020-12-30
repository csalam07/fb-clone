import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL}
             title={user.displayName}/>

            <SidebarRow Icon={WhatshotRoundedIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={PeopleIcon} title="friends"/>
            <SidebarRow Icon={GroupAddRoundedIcon} title="Groups"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={OndemandVideoRoundedIcon} title="Videos"/>
            <SidebarRow Icon={EventNoteRoundedIcon} title="Events"/>
            <SidebarRow Icon={HistoryRoundedIcon} title="Memories"/>
            <SidebarRow Icon={BookmarkRoundedIcon} title="Saved"/>
            <SidebarRow Icon={ExpandMoreRoundedIcon} title="See More"/>
        </div>
    )
}

export default Sidebar
