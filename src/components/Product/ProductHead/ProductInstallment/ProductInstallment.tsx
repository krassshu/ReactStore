import Image from "next/image"
import classes from "./ProductInstallment.module.css"
import discountSvg from "@/assets/icons/discount-shape.svg"
import BuyOptions from "./BuyOption/BuyOptions"
import { ProductContextProps, useProductContext } from "@/store/ProductContext"
import { NumericFormat } from "react-number-format"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/cartSlice"

export default function ProductInstallment() {
	const { product, loading = true }: ProductContextProps = useProductContext()
	const dispatch = useDispatch()

	const handleAddToCart = (productId: string) => {
		dispatch(addToCart(productId))
	}
	console.log(product)

	let discount

	if (!loading && product) {
		discount = Math.floor((product.lastPrice * 100) / product.price - 100)
	}

	return (
		<div className={classes.box}>
			{loading && !product ? (
				<>
					<div></div>
				</>
			) : (
				<>
					<div className={classes.price}>
						<div className={classes["current-price"]}>
							<span className={classes["actual-price"]}>
								<NumericFormat
									value={product!.price.toFixed(2)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
							</span>
							{discount === 0 ? (
								<></>
							) : (
								<div className={classes.discount}>
									<Image
										src={discountSvg}
										alt={"discount svg"}
									/>
									<span>-{discount}%</span>
								</div>
							)}
						</div>
						{product!.lastPrice >= product!.price ? (
							<></>
						) : (
							<span className={classes.lastPrice}>
								last price{" "}
								<NumericFormat
									value={product!.lastPrice.toFixed(2)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
							</span>
						)}
					</div>
					<BuyOptions />
					<button className={`${classes["buy-btn"]} ${classes.button}`}>
						Buy Now
					</button>
					<button
						className={`${classes["add-cart-btn"]} ${classes.button}`}
						onClick={() => handleAddToCart(product!._id)}
					>
						Add to cart
					</button>
				</>
			)}
		</div>
	)
}
