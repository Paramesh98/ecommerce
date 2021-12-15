import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route,Navigate } from 'react-router-dom'
import Header from '../components/Header'
import SignIn from '../pages/login'
import { userState } from '../../redux/userSlice'


function PrivateRoute({component:Component}) {
    const auth = useSelector(userState)
    console.log("private",auth.data?._id)
    if(auth.data?._id){
        return  <>
            <Header />
            <Component />
        </>
    }else{
      return <Navigate to={"/signin"} />
    }
    
}

export default PrivateRoute
