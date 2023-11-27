"use client"

import { ProductContextProps, useProductContext } from "@/store/ProductContext"
import classes from "./ProductItems.module.css"
import ProductsItem from "@/components/UI/ProductsItem/ProductsItem"
import { Product } from "@/app/Backend/Models/productModel"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useRerenderContext } from "@/store/RerenderContext"

export default function ProductItems() {
	const { product, loading = true }: ProductContextProps = useProductContext()
	const [localProducts, setLocalProducts] = useState([])

	const searchParams = useSearchParams()
	const { forceUpdate } = useRerenderContext()

	useEffect(() => {
		const filterProducts = () => {
			const brands = searchParams.getAll("brand")

			const filteredProducts = product?.filter((prod: Product) => {
				return brands.length === 0 || brands.includes(prod.brand)
			})

			setLocalProducts(filteredProducts)
		}

		filterProducts()
	}, [searchParams, product, forceUpdate])

	return (
		<div className={classes["products-wrapper"]}>
			{loading || !localProducts ? (
				<></>
			) : (
				localProducts.map((prod: Product, i: number) => (
					<ProductsItem
						key={i}
						{...prod}
					/>
				))
			)}
		</div>
	)
}
