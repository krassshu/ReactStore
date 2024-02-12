"use server"
import classes from "./Products.module.css"
import FilteredCategory from "@/components/Products/FilteredCategory/FilteredCategory"
import ProductsCategory from "@/components/Products/ProductsCategory/ProductsCategory"
import ProductsFilters from "@/components/Products/ProductsFilters/ProductsFilters"
import SortingProducts from "@/components/Products/SortingProducts/SortingProducts"
import Breadcrumb from "@/components/UI/Breadcrumb/Breadcrumb"
import connectDB from "@/app/Backend/mongoose"
import ProductModel from "@/app/Backend/Models/productModel"
import ProductsItem from "@/components/UI/ProductsItem/ProductsItem"

async function getAllProducts(category: string) {
	connectDB()
	console.log(1)
	try {
		if (category === "products") {
			const products = await ProductModel.find({}).exec()
			return products ? products.map((product) => product.toObject()) : []
		} else {
			const products = await ProductModel.find({
				category: category.toLowerCase(),
			}).exec()
			return products ? products.map((product) => product.toObject()) : []
		}
	} catch (error: any) {
		console.error("Error fetching products:", error.message)
		return []
	}
}

export async function getFilteredProducts(brandFilter: any) {
	connectDB()
	try {
		let query = {}
		if (brandFilter) {
			if (Array.isArray(brandFilter)) {
				query = { brand: { $in: brandFilter } }
			} else {
				query = { brand: brandFilter }
			}
		}
		const products = await ProductModel.find(query).exec()
		return JSON.parse(JSON.stringify(products))
	} catch (error) {
		throw new Error("Error fetching filtered products")
	}
}

export default async function Products({
	params,
	searchParams,
}: {
	params: { products: string }
	searchParams: any
}) {
	const brandFilter = searchParams?.brand || []
	const filteredProducts =
		brandFilter.length !== 0
			? await getFilteredProducts(brandFilter)
			: await getAllProducts(params.products)

	function convertToObjectWithoutPrototype(obj: any) {
		return JSON.parse(JSON.stringify(obj))
	}

	const allProducts = await getAllProducts(params.products)

	const products = convertToObjectWithoutPrototype(filteredProducts)
	return (
		<>
			<ProductsFilters
				products={convertToObjectWithoutPrototype(allProducts)}
			/>
			<div className={classes.products}>
				<SortingProducts />
				<div className={classes["products-wrapper"]}>
					{products &&
						products.map((product: any, i: number) => (
							<ProductsItem
								key={i}
								{...product}
							/>
						))}
				</div>
			</div>
		</>
	)
}
