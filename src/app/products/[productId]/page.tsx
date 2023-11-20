"use client"

import Header from "@/components/Header/Header"
import ProductC from "@/components/Product/Product"
import store from "@/redux/store"
import { Provider } from "react-redux"

export default function Product() {
	return (
		<Provider store={store}>
			<Header />
			<main className="spacer">
				<ProductC />
			</main>
		</Provider>
	)
}
