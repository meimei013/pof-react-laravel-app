import {configureStore} from '@reduxjs/toolkit';
import purchaseReducer from './features/purchase/purchaseSlice'

export default configureStore({
	reducer:{
		purchases: purchaseReducer,
	},
})