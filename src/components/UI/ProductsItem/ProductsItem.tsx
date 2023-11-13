import classes from "./ProductsItem.module.css"
import ProductDetails from "./ProductDetails/ProductDetails"
import spacerImg from "@/assets/ui-elements/spacer.svg"
import Image from "next/image"

export default function ProductsItem(props: any) {
	return (
		<div className={classes.item}>
			<div className={classes["product-img"]}>
				<Image
					src={""}
					alt={"s"}
				/>
			</div>
			<div className={classes.spacer}>
				<Image
					src={spacerImg}
					alt="spacer"
				/>
			</div>
			<ProductDetails />
		</div>
	)
}
