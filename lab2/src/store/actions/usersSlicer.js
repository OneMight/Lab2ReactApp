
import { createSlice } from '@reduxjs/toolkit';

const userSlicer =createSlice({
    name: 'users',
    initialState: {
        items: [],
        allusers:[],
        count: 0,
        error: null,
    },
    reducers: {
        setallusers:(state,action) => {
            state.allusers.push(action.payload)
        },
        addUser: (state, action) => {
            const newCard = action.payload;
           
            state.items.push(newCard);
            
        },
        removeUser:(state,action)=>{
            state.items = state.items.filter((obj) => obj.name !== action.payload.name);
           
        },
        updateUser:(state,action)=>{
            const { id, updatedData } = action.payload;
            const userIndex = state.items.findIndex(user => user.id === id);
            if (userIndex >= 0) {
                state.items[userIndex] = { ...state.items[userIndex], ...updatedData };
                state.error = null;
            } else {
                state.error = 'Card no found';
            }
      
        },

    }
})
export const { setallusers, addUser, removeUser,updateUser} = userSlicer.actions;
export const UserReducer = userSlicer.reducer;
