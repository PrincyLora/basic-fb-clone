import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import {auth, provider} from './fireb'
import { useStateValue } from './StateProvider'
import {actionTypes} from './Reducer';
import Unorderedlisttest from './Unorderedlisttest'

const testArrayMap =[1,2,3,4,5];
function Login() {
   const[state, dispatch]=useStateValue();
    const signIn = ()=>{
      auth.signInWithPopup(provider)
      .then(result=>{
        dispatch({type:actionTypes.SET_USER,
        user: result.user})
        console.log(result.user)
      }).catch(error=>alert(error.message))
    }
  return (
    <div className='login'>
        <div>
      <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook"/>
      <img src="" alt=""/>
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    
    </div>
  )
}

export default Login
