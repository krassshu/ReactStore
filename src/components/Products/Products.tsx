import Breadcrumb from "@/components/UI/Breadcrumb/Breadcrumb"
import FilteredCategory from "./FilteredCategory/FilteredCategory"
import classes from "./Products.module.css"
import ProductsCategory from "./ProductsCategory/ProductsCategory"
import ProductsFilters from "./ProductsFilters/ProductsFilters"
import SortingProducts from "./SortingProducts/SortingProducts"
import { ProductProvider } from "@/store/ProductContext"
import ProductItems from "./ProductItems/ProductItems"
import { RerenderProvider } from "@/store/RerenderContext"
import { useParams } from "next/navigation"

export default function Products({ params, searchParams }: any) {
	console.log(searchParams)
	const category = params
	return (
		<>
			<Breadcrumb />
			<ProductsCategory />
			<FilteredCategory />
			<section className={classes.section}>
				<ProductProvider category={category?.products?.[0] || undefined}>
					<RerenderProvider>
						<ProductsFilters />
						<div className={classes.products}>
							<SortingProducts />
							<ProductItems />
						</div>
					</RerenderProvider>
				</ProductProvider>
			</section>
		</>
	)
}
