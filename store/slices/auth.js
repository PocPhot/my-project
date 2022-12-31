import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import AuthServices from '../../services/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'

// Post user login 
export const fetchAuthLogin = createAsyncThunk(
    'auth/fetchAuth',
    async (data, thunkAPI) => {
        const response = await AuthServices.postAuth(data)
        return response.data
    }
)

const authSlice = createSlice({

    name: 'Auth',

    // Create initialState 
    initialState: {
        token: [],
        isLoading: false
    },
    reducers: {
        logOut: (state, action) => {
            AsyncStorage.removeItem('access_token')
            return {
                ...state,
                isLoading: false,
                token: []
            }
        }
    },

    extraReducers: (builder) => {

        // Case resolve
        builder.addCase(fetchAuthLogin.fulfilled, (state, action) => {
            const { access_token } = action.payload
            AsyncStorage.setItem('access_token', access_token)
            return {
                ...state,
                isLoading: true,
                token: access_token
            }
        })

        // Case rejected
        builder.addCase(fetchAuthLogin.rejected, (state, action) => {
            console.log(action.error.message)
        })
    },
})

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage,
}

export const { logOut } = authSlice.actions
export default persistReducer(persistConfig, authSlice.reducer) // Save state auth by redux persist