import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { COLORS, MESSAGE } from '../../contains'
import ShowToast from '../../help/showToast'

const cartSlice = createSlice({

    name: 'Cart',

    // Create initialState 
    initialState: {
        itemsCart: []
    },

    reducers: {

        AddCart: (state, action) => {
            const { id, sum = 1, total = 0 } = action.payload
            const activeItem = state.itemsCart.find((item) => item.id === id)
            let newData = [...state.itemsCart]
            if (activeItem) { // Item exist into list Cart. Change value sum + 1
                newData = newData.map((item) => {
                    let sumUp = item.sum
                    let totalCur = item.total
                    if (item.id === id) {
                        sumUp = sum !== 1 ? sum : sumUp + 1 // More quality product when quality  != 1
                        totalCur = total * sumUp
                    }
                    return {
                        ...item,
                        sum: sumUp,
                        product_id: item.id,
                        quantity: sumUp,
                        total: totalCur
                    }
                })
            } else { // Item don't exist into list Cart. Add new id 
                newData.push({ id: id, sum: sum, total: total * sum, product_id: id, quantity: sum })
            }
            ShowToast(MESSAGE.addQualitySuccess, COLORS.success) // Show message success
            return {
                ...state,
                itemsCart: newData
            }
        },

        RemoveCart: (state, action) => {
            const { id } = action.payload
            const activeItem = state.itemsCart.find((item) => item.id === id)
            let newData = [...state.itemsCart]
            if (activeItem) {
                newData = newData.filter(item => item.id !== id)
            }
            return {
                ...state,
                itemsCart: newData
            }
        },

        RemoveAll: (state, action) => {
            state.itemsCart = []
        }
    },

})

// const persistConfig = {
//     key: 'cart',
//     storage: AsyncStorage,
// }

export const { AddCart, RemoveCart, RemoveAll } = cartSlice.actions
export default cartSlice.reducer