import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import SliderServices from '../../services/slider'

// Get list slider from API
export const fetchSlider = createAsyncThunk(
    'slider/fetchSlider',
    async (data, thunkAPI) => {
        const response = await SliderServices.getListSlider(data)
        return response.data
    }
)

const sliderSlice = createSlice({

    name: 'Slider',

    // Create initialState 
    initialState: {
        listSlider: []
    },
    reducers: {},

    extraReducers: (builder) => {

        // Case resolve
        builder.addCase(fetchSlider.fulfilled, (state, action) => {
            state.listSlider = action.payload
        })

        // Case rejected
        builder.addCase(fetchSlider.rejected, (state, action) => {
            console.log(action.error.message)
        })
    },
})

export const { } = sliderSlice.actions
export default sliderSlice.reducer