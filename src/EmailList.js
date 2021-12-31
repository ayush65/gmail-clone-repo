import React from 'react'
import './EmailList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';



function EmailList() {
    return (
        <div className = "emailList">
            <div className = "emailList__settings">
                <div className = "emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className = "emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
                <div className="emailList__sections">
                        <Section Icon={InboxIcon} title="primary" color="red" selected />
                        <Section Icon={PeopleIcon} title="social" color="#1A73E8" Selected />
                        <Section Icon={LocalOfferIcon} title="promotional" color="green" Selected />
                </div>

                <div className = "emailList__list">

              
                    <EmailRow
                        title="twitchen"
                        subject="HI i am logged in"
                        description="i am ready"
                        time="10pm"
                    />

                    <EmailRow
                        title="Ayush"
                        subject="HI i am logged in as Ayush"
                        description="i am ready Ayush"
                        time="10:30pm"
                    />

                    <EmailRow
                        title="Ayush Prakash"
                        subject="HI i am logged in as Ayush Prakash"
                        description="i am ready Ayush Prakash"
                        time="10:58am"
                    />
              
              <EmailRow
                        title="Rohan"
                        subject="HI From Rohan"
                        description="i am ready Rohan"
                        time="10:11pm"
                    />
              
              <EmailRow
                        title="Rohit "
                        subject="HI From Rohit"
                        description="i am ready Rohit"
                        time="11:54am"
                    />
              
              <EmailRow
                        title="Arushi"
                        subject="HI i am logged in as Arushi"
                        description="i am ready Arushi"
                        time="10:51am"
                    />
              
              <EmailRow
                        title="payal"
                        subject="HI i am logged in as Payal"
                        description="i am ready Payal"
                        time="12:58am"
                    />
              
              <EmailRow
                        title="kajal"
                        subject="HI i am logged in as kajal"
                        description="i am ready Kajal"
                        time="01:30am"
                    />
              
              <EmailRow
                        title="Shruti"
                        subject="HI i am logged in as Shruti"
                        description="i am ready Shruti"
                        time="09:30pm"
                    />
              
              <EmailRow
                        title="Anjali"
                        subject="HI i am logged in as Anjali"
                        description="i am ready Anjali"
                        time="07:30pm"
                    />
              
              <EmailRow
                        title="rahul"
                        subject="HI i am logged in as rahul"
                        description="i am ready rahul"
                        time="05:30pm"
                    />
              
              <EmailRow
                        title="piyush"
                        subject="HI i am logged in as piyush"
                        description="i am ready piyush"
                        time="12:30pm"
                    />
              
              

                </div>
            </div>
        
    )
}

export default EmailList
