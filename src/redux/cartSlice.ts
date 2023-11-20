// redux/cartSlice.ts
import { createSlice } from "@reduxjs/toolkit"

interface CartState {
	items: string[]
}

const initialState: CartState = {
	items: [],
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			return {
				...state,
				items: [...state.items, action.payload],
			}
		},
	},
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
