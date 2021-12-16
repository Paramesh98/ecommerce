import Header from './index'
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import RenderWithRedux from '../../../utils/renderWithRedux'

describe("Header Component",() =>{
      const {getByText,getAllByText} = render(<RenderWithRedux>
        <Header />
    </RenderWithRedux>)
    it("should have nav items", () =>{
        const logo = getAllByText(/LOGO/i)
        const products = getAllByText(/Products/i)
        const about = getAllByText(/about/i)
        const signout = getByText(/signout/i)
        // fireEvent.click(addToCart[0])
        
    })
})
