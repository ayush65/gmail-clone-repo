import { Button } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardIcon from '@mui/icons-material/Keyboard';



function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <Button startIcon={<AddIcon  fontSize="large" />} className="sidebar_compose">Compose</Button>

                <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
                <SidebarOption Icon={StarIcon} title="Starred" number={14} />
                <SidebarOption Icon={AccessTimeFilledIcon} title="Snoozed" number={29} />
                <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
                <SidebarOption Icon={LabelImportantIcon} title="Important" number={100} />
                <SidebarOption Icon={NoteIcon} title="Drafts" number={124} />
                <SidebarOption Icon={ExpandMoreIcon} title="More" number={4} />
            </div>

            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton >
                        <PersonIcon />
                    </IconButton>
                    <IconButton >
                        <DuoIcon />
                    </IconButton>
                    <IconButton >
                        <PhoneIcon />
                    </IconButton>
                    <IconButton >
                        <KeyboardIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )

}

export default Sidebar
