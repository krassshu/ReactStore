import Breadcrumb from "@/components/UI/Breadcrumb/Breadcrumb"
import FilteredCategory from "./FilteredCategory/FilteredCategory"
import classes from "./Products.module.css"
import ProductsCategory from "./ProductsCategory/ProductsCategory"
import ProductsFilters from "./ProductsFilters/ProductsFilters"
import SortingProducts from "./SortingProducts/SortingProducts"
import ProductsItem from "@/components/UI/ProductsItem/ProductsItem"

export default function Products() {
	return (
		<>
			<Breadcrumb />
			<ProductsCategory />
			<FilteredCategory />
			<section className={classes.section}>
				<ProductsFilters />
				<div className={classes.products}>
					<SortingProducts />
					<div className={classes["products-wrapper"]}>
						<ProductsItem />
						<ProductsItem />
						<ProductsItem />
						<ProductsItem />
					</div>
				</div>
			</section>
		</>
	)
}
