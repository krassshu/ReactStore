import BasedFilter from "./BasedFilter/BasedFilter"
import DiscoundFilters from "./DiscoundFilters/DiscoundFilters"
import PriceFilters from "./PriceFilters/PriceFilters"
import classes from "./ProductsFilters.module.css"

export default function ProductsFilters() {
	return (
		<aside className={classes.aside}>
			<div className={classes.heading}>
				<span>Filters</span>
				<button className={classes.clearBtn}>Clear all</button>
			</div>
			<BasedFilter />
			<DiscoundFilters />
			<PriceFilters />
		</aside>
	)
}
