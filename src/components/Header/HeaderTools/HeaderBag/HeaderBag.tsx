import Image from "next/image"
import BagItem from "./BagItem/BagItem"
import classes from "./HeaderBag.module.css"

import shoppingIcon from "@/assets/icons/shopping-cart.svg"
import { useSelector } from "react-redux"
import Link from "next/link"
import countProductOccurrences from "@/components/Util/countProductOccurrences "
import { NumericFormat } from "react-number-format"

export default function HeaderBag() {
	const products = useSelector((state: any) => state.cart.items)
	let productsAmount = 0

	const uniqueProducts: ProductToBag[] = Array.from(
		new Set(products.map((prod: ProductToBag) => prod.id))
	).map(
		(id) =>
			products.find((prod: ProductToBag) => prod.id === id) as ProductToBag
	)
	products.forEach((prod: ProductItem) => {
		productsAmount += prod.price
	})

	return (
		<div className={classes.wrapper}>
			<span className={classes.amount}>
				{products.length === 0 || products.length > 1
					? products.length + " items"
					: products.length + " item"}
			</span>
			{products.length === 0 ? (
				<div className={classes.empty}>
					<span className={classes.bigText}>Your shopping cart is empty</span>
					<span className={classes.mediumText}>
						Looking for some inspiration?
					</span>
					<Link
						href={"/products"}
						className={classes.goToProducts}
					>
						Go to products
					</Link>
				</div>
			) : (
				<>
					<div className={classes["items-wrapper"]}>
						{uniqueProducts.length !== 0 &&
							uniqueProducts.map((prod: ProductToBag) => (
								<BagItem
									key={prod.id}
									{...prod}
									count={countProductOccurrences(products, prod.id)}
								/>
							))}
					</div>
					<div className={classes.summary}>
						<div className={classes.total}>
							<span className={classes["total-head"]}>Grand total</span>
							<span className={classes.price}>
								<NumericFormat
									value={productsAmount.toFixed(2)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
							</span>
						</div>
						<button className={classes.process}>
							Proceed to Cart{" "}
							<Image
								src={shoppingIcon}
								alt={"shopping icon"}
							/>
						</button>
					</div>
				</>
			)}
		</div>
	)
}
