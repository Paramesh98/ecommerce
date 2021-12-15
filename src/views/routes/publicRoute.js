import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route,Navigate } from 'react-router-dom'
import SignIn from '../pages/login'
import { userState } from '../../redux/userSlice'


function PublicRoute({component:Component}) {
      const auth = useSelector(userState)
      console.log("auth",auth)
    if(!auth.data?._id){
        return  <Component />
    }else{
      return <Navigate to={"/"} />
    }
    
}

export default PublicRoute
