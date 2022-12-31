import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({

    name: 'Filter',

    // Create initialState 
    initialState: {
        items: {
            activeTitle: 'Mới nhất',
            toValue: 50000000,
            fromValue: 0
        }
    },
    reducers: {
        Filter: (state, action) => {
            const { activeTitle, toValue, fromValue } = action.payload
            state.items.activeTitle = activeTitle
            state.items.toValue = toValue[0]
            state.items.fromValue = fromValue
        }
    },

})

export const { Filter } = filterSlice.actions
export default filterSlice.reducer