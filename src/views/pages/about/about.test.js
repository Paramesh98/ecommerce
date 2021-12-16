import About from './index'
import React from 'react'
import {render, fireEvent, waitFor, screen, getByText} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { configureStore,createSlice } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'
import RenderWithRedux from '../../../utils/renderWithRedux'





describe("About Page",() =>{
    const {getByText} = render(<RenderWithRedux>
        <About />
    </RenderWithRedux>)
    it("should have title", () =>{
        const addToCart = getByText("Laboris officia commodo excepteur proident laborum sit")
        // fireEvent.click(addToCart[0])
        
    })
})
