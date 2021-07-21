import { createSlice } from '@reduxjs/toolkit';
// import { FETCH_USER_DETAILS, FETCH_PRODUCT_DETAILS, POST_NEW_USER_DETAILS } from './actionTypes';

export const initialState = {
	productDetails: null,
	listOfProducts: null,
	userInfo: {},
};

const productSlice = createSlice({
	name: 'productDataHandlerSlice',
	initialState: initialState,
	reducers: {
		fetchAllProducts (state, action) {
			return {
				...state,
				listOfProducts: action.payload,
			};
		},
		fetchSingleProductDetails (state, action) {
			return {
				...state,
				productDetails: action.payload,
			};
		}
	}
});

export const userSlice = createSlice({
	name: 'userDataHandlerSlice',
	initialState: initialState,
	reducers: {

	}
});

export default productSlice;