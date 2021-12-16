import Home from './index'
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { configureStore,createSlice } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'
import RenderWithRedux from '../../../utils/renderWithRedux'





describe("Home Page",() =>{
    const {getAllByText} = render(<RenderWithRedux>
        <Home />
    </RenderWithRedux>)
    it("should have products", () =>{
        const addToCart = getAllByText("Add To Cart")
        fireEvent.click(addToCart[0])
        
    })
})
