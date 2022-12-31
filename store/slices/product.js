import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import ProductServices from '../../services/product'

// Get Product by ID from API
export const fetchProductById = createAsyncThunk(
    'productById/fetchProductById',
    async (data, thunkAPI) => {
        const response = await ProductServices.getProductById(data)
        return response.data
    }
)

// Get Product special from API
export const fetchProducSpecial = createAsyncThunk(
    'productSpecial/fetchProducSpecial',
    async (data, thunkAPI) => {
        const response = await ProductServices.getAllProduct({ special: true, ...data })
        return response.data
    }
)

// Get Product new from API
export const fetchProducNew = createAsyncThunk(
    'productNew/fetchProducNew',
    async (data, thunkAPI) => {
        const response = await ProductServices.getAllProduct({ is_new: true, ...data })
        return response.data
    }
)

// Get Product all from API
export const fetchProductAll = createAsyncThunk(
    'productAll/fetchProductAll',
    async (data, thunkAPI) => {
        const response = await ProductServices.getAllProduct(data)
        return response.data
    }
)

// Get Product search from API
export const fetchProductSearch = createAsyncThunk(
    'productSearch/fetchProductSearch',
    async (data, thunkAPI) => {
        const response = await ProductServices.getAllProduct(data)
        return response.data
    }
)

const productSlice = createSlice({

    name: 'Product',

    // Create initialState 
    initialState: {
        productById: [],
        productSpecial: [],
        productNew: [],
        productAll: [],
        productSearch: []
    },
    reducers: {},

    extraReducers: (builder) => {

        // Case resolve of ProductById
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.productById = action.payload
        })

        // Case rejected of ProductById
        builder.addCase(fetchProductById.rejected, (state, action) => {
            console.log(action.error.message)
        })

        // Case resolve of ProducSpecial
        builder.addCase(fetchProducSpecial.fulfilled, (state, action) => {
            state.productSpecial = action.payload
        })

        // Case rejected of ProducSpecial
        builder.addCase(fetchProducSpecial.rejected, (state, action) => {
            console.log(action.error.message)
        })

        // Case resolve of ProducNew
        builder.addCase(fetchProducNew.fulfilled, (state, action) => {
            state.productNew = action.payload
        })

        // Case rejected of ProducNew
        builder.addCase(fetchProducNew.rejected, (state, action) => {
            console.log(action.error.message)
        })

        // Case resolve of ProducAll
        builder.addCase(fetchProductAll.fulfilled, (state, action) => {
            state.productAll = action.payload
        })

        // Case rejected of ProducAll
        builder.addCase(fetchProductAll.rejected, (state, action) => {
            console.log(action.error.message)
        })

        // Case resolve of ProducSearch
        builder.addCase(fetchProductSearch.fulfilled, (state, action) => {
            state.productSearch = action.payload
        })

        // Case rejected of ProducSearch
        builder.addCase(fetchProductSearch.rejected, (state, action) => {
            console.log(action.error.message)
        })
    },
})

export const { } = productSlice.actions
export default productSlice.reducer