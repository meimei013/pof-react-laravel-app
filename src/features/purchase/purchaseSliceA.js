import {createSlice} from '@reduxjs/toolkit';

const purchaseSliceA = createSlice({
	name:'purchasesa',
	initialState: {
		items:[],
		email:'',
		budgetHOlder:'',
		department:'',
		fullName:'',
		date: new Date()
	}

})