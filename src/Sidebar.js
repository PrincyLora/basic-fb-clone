import React from 'react'
import SidebarRow from './SidebarRow'
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined'
import  VideoLibraryIcon  from '@mui/icons-material/VideoLibrary'
import  StorefrontIcon  from '@mui/icons-material/Storefront'
import  ChatIcon  from '@mui/icons-material/Chat'
import  PeopleIcon  from '@mui/icons-material/People'
import  EmojiFlagsIcon  from '@mui/icons-material/EmojiFlags'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import './sidebar.css'
import { useStateValue } from './StateProvider'
function Sidebar() {
  const [{user},dispatch]=useStateValue()
  return (
    <div className='sidebar'>
        <SidebarRow src = {user.photoURL} title={user.displayName}/>
        <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      <SidebarRow Icon={ChatIcon} title='Messenger'/>
      <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
      <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>  
    </div>
  )
}

export default Sidebar
