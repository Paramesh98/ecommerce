import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { baseUrl, postApi } from '../utils/api'
// import { baseUrl, postApi } from '../../utils/api'
import Cookies from 'universal-cookie';

const initialState ={
    loading:false,
    data:{},
    error:null
}

// const user ={userId:"123456789",password:"123456789"}

const userData ={
    _id:"123456789",
    name:"name",
    password:"123456789",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxNzkyZDNhNmM0YmZjZTU2YzVlNDhmNCIsImlkIjoiMTIzNDU2Nzg5IiwibmFtZSI6IkFkbWluIiwibGFzdF9sb2dpbiI6IjEyIEZlYiAyMDIwIiwiYmFsYW5jZSI6NTAwLCJ0cmFuc2FjdGlvbiI6W3siZGF0ZSI6IjIzIE1hciAyMDIwIiwiZGVzYyI6IlJvb20gUmVudCIsImFtb3VudCI6MzAwLCJfaWQiOiI2MTc5MmQzYTZjNGJmY2U1NmM1ZTQ4ZjUifSx7ImRhdGUiOiIyNCBNYXIgMjAyMCIsImRlc2MiOiJNb3JyaXNpb24iLCJhbW91bnQiOjgwMCwiX2lkIjoiNjE3OTJkM2E2YzRiZmNlNTZjNWU0OGY2In1dLCJwYXNzd29yZCI6IjEyMzQ1Njc4OSIsIl9fdiI6MH0sImlhdCI6MTYzOTU2Mzc2OH0.up3A0KxK2r1Nu9-uVexSudIlGmYsxpnV3cINWjdK1cs"
}

export const getUserDetails = createAsyncThunk("user/fetchUser",async(user,{dispatch}) =>{
    // const res = await  postApi({url:baseUrl +"login", dataToSubmit:user})
    // let userData ={
    //     ...res.data.user,
    //     token:res.data.token
    // }
    // console.log("token", res.data.token)
    // return userData
    console.log("clad")
    return new Promise((resolve) => resolve(userData))
})

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signout:(state,action) =>{
            state.data = {}
        }
    },
    extraReducers:{
        [getUserDetails.pending]:(state,action) =>{
            state.loading = true
        },
        [getUserDetails.fulfilled]:(state,action)=>{
        let cookies = new Cookies()
        cookies.set("user", JSON.stringify(action.payload))
        state.data = action.payload
        },
        [getUserDetails.rejected]:(state,action) =>{
            state.error = action.payload
        },
    },
})

export const {signout} = userSlice.actions
export const userState = state => state.user

export default userSlice.reducer