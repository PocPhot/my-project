import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import UserServices from '../../services/user'

// Get Info User from API
export const fetchGetUser = createAsyncThunk(
    'user/fetchGetUser',
    async (data, thunkAPI) => {
        const response = await UserServices.getUser(data)
        return response.data
    }
)

// Update Info User from API
export const fetchUpdateUser = createAsyncThunk(
    'updateUser/fetchUpdateUser',
    async (data, thunkAPI) => {
        const response = await UserServices.updateUser(data)
        return response.data
    }
)

const userSlice = createSlice({

    name: 'User',

    // Create initialState 
    initialState: {
        userInfo: []
    },
    reducers: {},

    extraReducers: (builder) => {

        // Case resolve of fetchGetUser
        builder.addCase(fetchGetUser.fulfilled, (state, action) => {
            return {
                ...state,
                userInfo: action.payload
            }
        })

        // Case rejected of fetchGetUser
        builder.addCase(fetchGetUser.rejected, (state, action) => {
            console.log(action.error.message)
        })

        // Case resolve of fetchUpdateUser
        builder.addCase(fetchUpdateUser.fulfilled, (state, action) => {
        })

        // Case rejected of fetchUpdateUser
        builder.addCase(fetchUpdateUser.rejected, (state, action) => {
            console.log(action.error.message)
        })
    },
})

export const { } = userSlice.actions
export default userSlice.reducer