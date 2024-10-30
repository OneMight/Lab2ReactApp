import { configureStore } from '@reduxjs/toolkit'
import { CardReducer } from './actions/cardsSlicer.js';
const store = configureStore({
  reducer: {
    cards:CardReducer
  },
})
export default store