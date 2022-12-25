import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageBar from './MessageBar'
import Post from './Post'
import { useEffect, useState} from 'react'
import db from './fireb'
function Feed() {
  const [posts, setPosts]=useState([]);
  useEffect(()=>{
    db.collection('posts')
    .orderBy("timestamp","desc")
    .onSnapshot((snapshot)=>
    setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()}))));
  },[]);
  return (
    <div className='feed'>
      <StoryReel/>
      {/* Message */}
      <MessageBar/>
   
     {posts.map((post)=>(
       <Post key={post.data.id} profilePic={post.data.profile}
       image={post.data.image} username={post.data.username} message={post.data.message}
       timestamp={post.data.timestamp} />
     ))}
    </div>
  )
}

export default Feed
