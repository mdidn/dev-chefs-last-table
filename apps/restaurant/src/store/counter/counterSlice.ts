import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICounterState } from "./interface";

const initialState: ICounterState = {
	count: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.count++;
		},
		decrement: (state) => {
			state.count--;
		},
		add: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
		subtract: (state, action: PayloadAction<number>) => {
			state.count -= action.payload;
		},
	},
});

export default counterSlice.reducer;
export const { increment, decrement, add, subtract } = counterSlice.actions;
