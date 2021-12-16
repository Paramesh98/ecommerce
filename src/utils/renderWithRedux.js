import { configureStore, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

function RenderWithRedux({children}) {
const userSlice = createSlice({
    name:"user",
    initialState:{
        id:"123",
        token:"123"
    },
    reducers:{}
})
const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{}
})




 const store = configureStore({
  reducer: {
      user:userSlice.reducer,
      cart:cartSlice.reducer
  },
})
    return (
      <BrowserRouter>
    <Provider store={store}>
        {children}
        </Provider>
        </BrowserRouter>
    )
}

export default RenderWithRedux
