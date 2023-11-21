"use client"

import { useEffect, useState } from "react"
import Breadcrumb from "../UI/Breadcrumb/Breadcrumb"
import classes from "./Product.module.css"
import ProductComments from "./ProductComments/ProductComments"
import ProductDetails from "./ProductDetails/ProductDetails"
import ProductHead from "./ProductHead/ProductHead"
import SimilarProduct from "./SimilarProduct/SimilarProduct"
import { ProductProvider } from "@/store/ProductContext"

export default function Product({ productId }: { productId: string }) {
	return (
		<ProductProvider productId={productId}>
			<Breadcrumb />
			<section className={classes.section}>
				<ProductHead />
				<ProductDetails />
				{/* <SimilarProduct /> */}
				<ProductComments />
			</section>
		</ProductProvider>
	)
}
