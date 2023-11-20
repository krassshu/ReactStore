"use client"

import Header from "@/components/Header/Header"
import ProductsC from "@/components/Products/Products"
import store from "@/redux/store"
import { Provider } from "react-redux"

export default function Products() {
	return (
		<Provider store={store}>
			<Header />
			<main className="spacer">
				<ProductsC />
			</main>
		</Provider>
	)
}
