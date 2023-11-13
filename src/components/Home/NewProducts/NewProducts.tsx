import classes from "./NewProducts.module.css"
import ProductsItem from "@/components/UI/ProductsItem/ProductsItem"
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader"

export default function NewProducts() {
	return (
		<section className={classes.onSale}>
			<SectionHeader
				title="New Products"
				url="dasdas"
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
