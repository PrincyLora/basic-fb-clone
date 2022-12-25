import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className='header'>
      <div className='header__left'>
          <img className='' src='https://scontent-sin6-3.xx.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=_KpMhKn4dyEAX9_BhOu&_nc_ht=scontent-sin6-3.xx&oh=00_AT_r0Ha7LQUQky9RE_wsEIU6FZiVOupfNpbnZuh_Pl90QA&oe=62A375F9'
          alt='logo'></img>
          <div className='header__input'>
              <SearchIcon/>
          <input placeholder='Search Facebook' type='text'/>
          </div>
      </div>

      <div className='header__middle'>
          <div className='header__option--active'>
              <HomeIcon fontSize='large'/>
          </div>
          <div className='header__option'>
              <FlagIcon fontSize='large'/>
          </div>
          <div className='header__option'>
              <SubscriptionsOutlinedIcon fontSize='large'/>
          </div>
          <div className='header__option'>
              <StorefrontOutlinedIcon fontSize='large'/>
          </div>
          <div className='header__option'>
              <SupervisedUserCircleIcon fontSize='large'/>
          </div>
      </div>

      <div className='header__right'>
          <div className='header__info'>
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
          </div>
          <IconButton>
            <AddIcon/>
          </IconButton>
          <IconButton>
            <ForumIcon/>
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon/>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>
      </div>
       
    </div>
  )
}

export default Header

//__ because BEM naming convention