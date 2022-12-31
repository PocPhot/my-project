import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import CategoryServices from '../../services/category'

// Get list Category from API
export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async (data, thunkAPI) => {
        const response = await CategoryServices.getCategory()
        return response.data
    }
)

// Get list Category by ID from API
export const fetchCategoryById = createAsyncThunk(
    'categoryById/fetchCategoryById',
    async (data, thunkAPI) => {
        const response = await CategoryServices.getCategoryById(data)
        return response.data
    }
)

const categorySlice = createSlice({

    name: 'Category',

    // Create initialState 
    initialState: {
        listCategory: [],
        listCategoryById: []
    },
    reducers: {},

    extraReducers: (builder) => {

        // Case resolve of fetchCategory
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.listCategory = action.payload
        })

        // Case rejected of fetchCategory
        builder.addCase(fetchCategory.rejected, (state, action) => {
            console.log(action.error.message)
        })

        // Case resolve of fetchCategoryById
        builder.addCase(fetchCategoryById.fulfilled, (state, action) => {
            state.listCategoryById = action.payload
        })

        // Case rejected of fetchCategoryById
        builder.addCase(fetchCategoryById.rejected, (state, action) => {
            console.log(action.error.message)
        })
    },
})

export const { } = categorySlice.actions
export default categorySlice.reducer