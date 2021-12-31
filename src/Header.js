import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';
import { IconButton } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                <MenuIcon />
                </IconButton>
                 <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
            </div>
            <div className="header_middle">
                <SearchRoundedIcon/>
                <input placeholder="Search Mail " type="search"/>
                <ArrowDropDownIcon/>
            </div>
            <div className="header_right">
            <IconButton>
                        <HelpRoundedIcon />
                    </IconButton>
                    <IconButton>
                         <SettingsIcon />   
                    </IconButton>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <IconButton>
                    <AccountCircleIcon />
                    </IconButton>
            </div>
                   
          
        </div>
    )
}

export default Header
