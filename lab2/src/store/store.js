import { configureStore } from '@reduxjs/toolkit'
import { CardReducer } from './actions/cardsSlicer.js';
import { UserReducer } from './actions/usersSlicer.js'
const store = configureStore({
  reducer: {
    cards:CardReducer,
    users:UserReducer
  },
})
export default store