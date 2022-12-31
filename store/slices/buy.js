import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import BuyServices from '../../services/buy'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'

// Post user login 
export const fetchBuyProduct = createAsyncThunk(
    'buy/fetchBuyProduct',
    async (data, thunkAPI) => {
        const response = await BuyServices.buy(data)
        return response.data
    }
)

// Get info detail orders by order_code
export const fetchOrdersByCode = createAsyncThunk(
    'ordersByCode/fetchOrdersByCode',
    async (data, thunkAPI) => {
        const response = await BuyServices.getDetailOrderByCode(data)
        return response.data
    }
)

const buySlice = createSlice({

    name: 'Buy',

    // Create initialState 
    initialState: {
        listBuy: [],
        ordersDetail: []
    },

    reducers: {},

    extraReducers: (builder) => {

        // Case resolve of fetchBuyProduct
        builder.addCase(fetchBuyProduct.fulfilled, (state, action) => {
            state.listBuy = action.payload
        })

        // Case rejected of fetchBuyProduct
        builder.addCase(fetchBuyProduct.rejected, (state, action) => {
            console.log(action.error.message)
        })

        // Case resolve of fetchOrdersByCode
        builder.addCase(fetchOrdersByCode.fulfilled, (state, action) => {
            state.ordersDetail = action.payload
        })

        // Case rejected of fetchOrdersByCode
        builder.addCase(fetchOrdersByCode.rejected, (state, action) => {
            console.log(action.error.message)
        })
    },
})

// const persistConfig = {
//     key: 'auth',
//     storage: AsyncStorage,
// }

export const { } = buySlice.actions
export default buySlice.reducer // Save state auth by redux persist