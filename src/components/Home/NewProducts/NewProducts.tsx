"use client"

import classes from "./NewProducts.module.css"
import ProductsItem from "@/components/UI/ProductsItem/ProductsItem"
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader"
import ProductSkeleton from "@/components/UI/Skeletons/ProductSkeleton"
import { useProductContext } from "@/store/ProductContext"
import { useState } from "react"

export default function NewProducts() {
	const { product, loading = true } = useProductContext() || {}

	return (
		<section className={classes.onSale}>
			<SectionHeader
				title="New Products"
				url="dasdas"
			/>

			{loading || !product ? (
				<ProductSkeleton />
			) : (
				<div className={classes.wrapper}>
					{product
						.map((prod: ProductItem) => (
							<ProductsItem
								key={prod._id}
								id={prod._id}
								imagePath={prod.imagePath}
								productName={prod.productName}
								price={prod.price}
								lastPrice={prod.lastPrice}
								rating={prod.rating}
								colors={prod.colors}
							/>
						))
						.slice(0, 4)}
				</div>
			)}
		</section>
	)
}
