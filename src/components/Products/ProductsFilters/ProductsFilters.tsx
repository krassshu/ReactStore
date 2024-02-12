import { Product } from "@/app/Backend/Models/productModel"
import BasedFilter from "./BasedFilter/BasedFilter"
import DiscountFilters from "./DiscountFilters/DiscountFilters"
import PriceFilters from "./PriceFilters/PriceFilters"
import classes from "./ProductsFilters.module.css"

export interface BrandCount {
	brand: string
	amount: number
}

function getBrandCounts(products: Product[]): BrandCount[] {
	const brandCounts: { [key: string]: number } = {}

	products.forEach((product) => {
		const brand = product.brand

		if (brand) {
			if (brandCounts[brand]) {
				brandCounts[brand]++
			} else {
				brandCounts[brand] = 1
			}
		}
	})

	const result: BrandCount[] = Object.keys(brandCounts).map((brand) => ({
		brand,
		amount: brandCounts[brand],
	}))

	return result
}

export default function ProductsFilters({ products }: { products: Product[] }) {
	const brandCounts = getBrandCounts(products)

	return (
		<aside className={classes.aside}>
			<div className={classes.heading}>
				<span>Filters</span>
				<button className={classes.clearBtn}>Clear all</button>
			</div>
			<BasedFilter brands={brandCounts} />
			<DiscountFilters />
			<PriceFilters />
		</aside>
	)
}
