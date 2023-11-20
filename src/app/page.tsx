"use client"

import Header from "@/components/Header/Header"
import HomeC from "@/components/Home/Home"
import store from "@/redux/store"
import { Provider } from "react-redux"

export default function Home() {
	return (
		<Provider store={store}>
			<Header />
			<main className="spacer">
				<HomeC />
			</main>
		</Provider>
	)
}
