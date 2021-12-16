import Login from './index'
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { configureStore,createSlice } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'
import RenderWithRedux from '../../../utils/renderWithRedux'




describe("Login Page",() =>{
    const {getByText} = render(<RenderWithRedux>
        <Login />
    </RenderWithRedux>)
    it("should have input items", () =>{
        const userId = getByText("User Id *")
        const password = getByText("Password *")
        const submitButton = getByText("Sign In")
        fireEvent.click(submitButton)
        
    })
})
