import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ShowToast from '../../help/showToast'
import { COLORS, MESSAGE } from '../../contains'

const favoriteSlice = createSlice({

    name: 'Favorite',

    // Create initialState 
    initialState: {
        listFavorite: []
    },

    reducers: {
        addListFavorite: (state, action) => {
            const { id } = action.payload
            const activeItem = state.listFavorite.find(item => item === id)
            if (activeItem) { // User dislike product
                state.listFavorite = state.listFavorite.filter(item => item !== id)
                ShowToast(MESSAGE.dislike, COLORS.main)
            } else { // User like product
                state.listFavorite = [id, ...state.listFavorite]
                ShowToast(MESSAGE.like, COLORS.main)
            }
        },

        deleteAllFavorite: (state, action) => {
            state.listFavorite.splice(0)
        }
    },
})

const persistConfig = {
    key: 'favorite',
    storage: AsyncStorage,
}

export const { addListFavorite, deleteAllFavorite } = favoriteSlice.actions
export default persistReducer(persistConfig, favoriteSlice.reducer) // Save state favorite by redux persist