import React from 'react'
import './SidebarOption.css'
import Sidebar from './Sidebar'

function SidebarOption({Icon ,title ,number ,selected }) {
    return (
        <div className={`sidebar_options ${selected && "sidebar_options--active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
            
        </div>
    )
}

export default SidebarOption
