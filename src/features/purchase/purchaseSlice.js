import {createSlice} from '@reduxjs/toolkit';

const initialState = [
	{id:1, itemDesc:"Table & Chair", quantity:"5", estimatedPrice:"380", attachFile:"aaaaa.jpg", remarks:"Need it by Monday"},
	{id:2, itemDesc:"Uniform", quantity:"15", estimatedPrice:"3810", attachFile:"bbbb.jpg", remarks:"Need it by Tuesday"},
	];

//export const sendNewPurchase = createAsyncThunk(
	//'posts/sendNewPurchase',
	// The payload creator receives the partial `{title, content, user}` object
	//async initialPurchase => {
	  // We send the initial data to the fake API server
	 // const response = await client.post('/fakeApi/posts', initialPurchase)
	  // The response includes the complete post object, including unique ID
	 // return response.data
	//}
 // )
  
 
const purchaseSlice = createSlice({
	name:"purchases",
	initialState,
	reducers:{
		purchaseAdded(state, action) {
			state.push(action.payload);
		},
		purchaseUpdated(state, action){
			const {id, itemDesc, quantity, estimatedPrice, attachFile, remarks} = action.payload;
			const existingPurchase = state.find((purchase) => purchase.id === id);
			if (existingPurchase) {
				existingPurchase.itemDesc = itemDesc;
				existingPurchase.quantity = quantity;
				existingPurchase.estimatedPrice = estimatedPrice;
				existingPurchase.attachFile = attachFile;
				existingPurchase.remarks = remarks;
			}

		}
	}
	//extraReducers(builder) {
		// omit posts loading reducers
	//	builder.addCase(sendNewPurchase.fulfilled, (state, action) => {
		  // We can directly add the new post object to our posts array
	//	state.posts.push(action.payload)
	//	})
	  //}
})


export const {purchaseAdded, purchaseUpdated} = purchaseSlice.actions;
export default purchaseSlice.reducer;