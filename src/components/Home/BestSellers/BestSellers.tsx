import ProductsItem from "@/components/UI/ProductsItem/ProductsItem"
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader"
import classes from "./BestSellers.module.css"

export default function BestSellers() {
	return (
		<section className={classes.section}>
			<SectionHeader
				title="Best Sellers"
				url="dasd"
			/>
			<div className={classes.wrapper}>
				<ProductsItem />
				<ProductsItem />
				<ProductsItem />
				<ProductsItem />
			</div>
		</section>
	)
}
