import Product from './index'
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import RenderWithRedux from '../../../utils/renderWithRedux'

const product =  {
    "id": "jenlooper-cactus",
    "Maker": "@jenlooper",
    "img": "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",
    "Url": "https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393",
    "Title": "The Quantified Cactus",
    "Description": "This project is a good learning project to get comfortable with soldering and programming an Arduino.",
    "price":"340",
    "Ratings": [
      5,
      5
    ]
  }

describe("Product Component",() =>{
      const {getByText} = render(<RenderWithRedux>
        <Product product={product} />
    </RenderWithRedux>)
    it("should have props value", () =>{
       const title = getByText(product.Title)
       const desc = getByText(product.Description)
       const price = getByText( "$ " + product.price)
        
    })
})
