
import { createSlice } from '@reduxjs/toolkit';

const userSlicer =createSlice({
    name: 'cards',
    initialState: {
        users: [],
        allusers:[],
        count: 0,
        error: null,
    },
    reducers: {
        setallusers:(state,action) => {
            state.allitems.push(action.payload)
        },
        addUser: (state, action) => {
            const newCard = action.payload;
           
            state.items.push(newCard);
            
        },
        removeUser:(state,action)=>{
           state.items = state.items.filter((obj) => obj.id !== action.payload.id)
           
        },
        updateUser:(state,action)=>{
            const { id, updatedData } = action.payload;
            const CardIndex = state.items.findIndex(card => card.id === id);
            if (CardIndex >= 0) {
                state.items[CardIndex] = { ...state.items[CardIndex], ...updatedData };
                state.error = null;
            } else {
                state.error = 'Card no found';
            }
      
        },

    }
})
export const { setallusers, addUser, removeUser,updateUser} = userSlicer.actions;
export const UserReducer = userSlicer.reducer;
