"use client"

import classes from "./NewProducts.module.css"
import ProductsItem from "@/components/UI/ProductsItem/ProductsItem"
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader"
import axios from "axios"
import { useEffect, useState } from "react"

export default function NewProducts() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await axios.get("/api/getProducts")
				setProducts(res.data.product)
			} catch (error: any) {
				console.error("Błąd podczas pobierania danych:", error.message)
			}
		}

		fetchData()
	}, [])

	return (
		<section className={classes.onSale}>
			<SectionHeader
				title="New Products"
				url="dasdas"
			/>
			<div className={classes.wrapper}>
				{products.map((prod: any) => (
					<ProductsItem
						key={prod._id}
						id={prod._id}
						img={prod.imagePath}
						name={prod.productName}
					/>
				))}
			</div>
		</section>
	)
}
