import Cart from './index'
import React from 'react'
import {render, fireEvent, waitFor, screen, getByText} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { configureStore,createSlice } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'
import RenderWithRedux from '../../../utils/renderWithRedux'





describe("Cart Page",() =>{
    const {getByText} = render(<RenderWithRedux>
        <Cart />
    </RenderWithRedux>)
    it("should display not items in cart", () =>{
        const addToCart = getByText("No Item in your cart")
        // fireEvent.click(addToCart[0])
        
    })
})
