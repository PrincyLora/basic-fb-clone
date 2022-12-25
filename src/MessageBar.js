import React from 'react'
import './MessageBar.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import db from './fireb';
import firebase from 'firebase/compat/app';

function MessageBar() {
  const[input, setInput]=useState('');
  const[imageUrl, setImageUrl]=useState('');
   const[{user},dispatch]=useStateValue();
  const handleSubmit = e =>{
     e.preventDefault();
     db.collection('posts').add({
       message: input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
       profile:user.photoURL,
       username:user.displayName,
       image:imageUrl
     })
     setInput("");
     setImageUrl("")
  }
  return (
    <div className='messageBar'>
      <div className='messageBar__top'>
          <Avatar src={user.photoURL}/>
          <form>
            <input value={input} 
            onChange={(e)=>setInput(e.target.value)}
            className='messageBar__input' placeholder={`What's on your mind ${user.displayName}`} />
            <input
             value={imageUrl} 
            onChange={(e)=>setImageUrl(e.target.value)} placeholder='image URL (opional)'/>
            <button onClick={handleSubmit} type="submit">Hidden submit</button>
         </form>
      </div>
      <div className='messageBar__bottom'>
        <div className='messagebar__option'>
            <VideocamIcon style={{color:"red"}}/>
            <h3>Live Video</h3>
        </div>
        <div className='messagebar__option'>
            <PhotoLibraryIcon style={{color:"green"}}/>
            <h3>Photo/Video</h3>
        </div>
        <div className='messagebar__option'>
            <InsertEmoticonIcon style={{color:"yellow"}}/>
            <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageBar
