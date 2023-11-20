"use client"

import FAQC from "@/components/FAQ/Faq"
import Header from "@/components/Header/Header"
import store from "@/redux/store"
import { Provider } from "react-redux"

export default function FAQ() {
	return (
		<Provider store={store}>
			<Header />
			<main className="spacer">
				<FAQC />
			</main>
		</Provider>
	)
}
