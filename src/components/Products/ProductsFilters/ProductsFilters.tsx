"use client"
import BasedFilter from "./BasedFilter/BasedFilter"
import DiscountFilters from "./DiscountFilters/DiscountFilters"
import PriceFilters from "./PriceFilters/PriceFilters"
import classes from "./ProductsFilters.module.css"
import { useProductFilters } from "../useProductFilters"

export default function ProductsFilters() {
	const filterFields = ["brand", "price"]

	const filters = useProductFilters(filterFields)

	return (
		<aside className={classes.aside}>
			<div className={classes.heading}>
				<span>Filters</span>
				<button className={classes.clearBtn}>Clear all</button>
			</div>

			{filters && <BasedFilter {...filters[0]} />}
			<DiscountFilters />
			<PriceFilters />
		</aside>
	)
}
