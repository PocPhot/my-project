import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const seenSlice = createSlice({

    name: 'Seen',

    // Create initialState 
    initialState: {
        listSeen: []
    },

    reducers: {
        AddListSeen: (state, action) => {
            const { id, view = 1 } = action.payload
            const activeItem = state.listSeen.find(item => item.id === id)
            let newData = [...state.listSeen]
            if (activeItem) {
                newData = newData.map(item => {
                    let viewCur = item.view
                    if (item.id === id) {
                        viewCur += 1
                    }
                    return {
                        ...item,
                        view: viewCur
                    }
                })
            } else {
                newData.push({ id: id, view: view })
            }

            return {
                ...state,
                listSeen: newData
            }
        }
    },
})

const persistConfig = {
    key: 'seen',
    storage: AsyncStorage,
}

export const { AddListSeen } = seenSlice.actions
// export default persistReducer(persistConfig, seenSlice.reducer) // Save state favorite by redux persist
export default seenSlice.reducer