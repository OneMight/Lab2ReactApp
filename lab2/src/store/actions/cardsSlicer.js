
import { createSlice } from '@reduxjs/toolkit';

const cardSlicer =createSlice({
    name: 'cards',
    initialState: {
        items: [],
        allitems:[],
        count: 0,
        error: null,
    },
    reducers: {
        setallitems:(state,action) => {
            state.allitems.push(action.payload)
        },
        addCard: (state, action) => {
            const newCard = action.payload;
           
            state.items.push(newCard);
            
        },
        removeCard:(state,action)=>{
           state.items = state.items.filter((obj) => obj.id !== action.payload.id)
           
        },
        updateCard:(state,action)=>{
            const { id, updatedData } = action.payload;
            const CardIndex = state.items.findIndex(card => card.id === id);
            if (CardIndex >= 0) {
                state.items[CardIndex] = { ...state.items[CardIndex], ...updatedData };
                state.error = null;
            } else {
                state.error = 'Card no found';
            }
      
        },
        increment:state=>{
            state.count+=1
        },
        decrement:state=>{
            state.count-=1
        }
        
    }
})
export const { addCard, removeCard, updateCard,increment,decrement,setallitems } = cardSlicer.actions;
export const CardReducer = cardSlicer.reducer;
