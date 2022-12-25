import React from 'react'
import { Avatar } from '@mui/material';
import "./SidebarRow.css"
function SidebarRow({src, Icon, title}) {
  return (
    <div className='sidebarRow'>
     {src && <Avatar/>}
     {Icon && <Icon/>}
     <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
