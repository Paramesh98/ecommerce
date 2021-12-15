import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            let product = {...action.payload}
            product["quantity"] = 1
            state.push(product)
        },
        remove(state,action){
            return state.filter((item) => item.id !== action.payload.id)
        },
         incrementCart(state,{payload}){
         state.forEach(item => {
             if(item.id === payload.id){
                 item.quantity = item.quantity +1
             }
         })
        },
         decrementCart(state,{payload}){  
         state.forEach((item,i,object) =>{
            if(item.id === payload.id &&item.quantity === 1){

                object.splice(i,1)
                
             }
                if(item.id === payload.id && item.quantity >1){
                    item.quantity = item.quantity - 1
                }
            })
        },
    }
})

export const {add,remove,incrementCart,decrementCart} = cartSlice.actions

export const cartState = state => state.cart

export default cartSlice.reducer