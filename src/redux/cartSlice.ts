import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartState {
	items: ProductToBag[]
}

const initialState: CartState = {
	items: [],
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ProductToBag>) => {
			state.items.push(action.payload)
		},
		removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
			state.items = state.items.filter((item) => item.id !== action.payload.id)
		},
		removeOneFromCart: (state, action: PayloadAction<{ id: string }>) => {
			const indexToRemove = state.items.findIndex(
				(item) => item.id === action.payload.id
			)

			if (indexToRemove !== -1) {
				state.items.splice(indexToRemove, 1)
			}
		},
	},
})

export const { addToCart, removeFromCart, removeOneFromCart } =
	cartSlice.actions
export default cartSlice.reducer
