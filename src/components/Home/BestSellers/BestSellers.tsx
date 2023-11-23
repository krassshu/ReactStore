import ProductsItem from "@/components/UI/ProductsItem/ProductsItem"
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader"
import classes from "./BestSellers.module.css"
import { ProductContextProps, useProductContext } from "@/store/ProductContext"
import ProductSkeleton from "@/components/UI/Skeletons/ProductSkeleton"

export default function BestSellers() {
	const { product, loading = true } = useProductContext() || {}

	return (
		<section className={classes.section}>
			<SectionHeader
				title="Best Sellers"
				url="dasd"
			/>
			<div className={classes.wrapper}>
				{loading || !product ? (
					<ProductSkeleton />
				) : (
					product
						?.map((props: ProductItem, i: number) => (
							<ProductsItem
								key={i}
								{...props}
							/>
						))
						?.slice(0, 4)
				)}
			</div>
		</section>
	)
}
