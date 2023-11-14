import Image from "next/image"
import classes from "./ProductInstallment.module.css"
import discountSvg from "@/assets/icons/discount-shape.svg"
import BuyOptions from "./BuyOption/BuyOptions"

export default function ProductInstallment() {
	return (
		<div className={classes.box}>
			<div className={classes.price}>
				<div className={classes["current-price"]}>
					<span className={classes['actual-price']}>$ 1299.00</span>
					<div className={classes.discount}>
						<Image
							src={discountSvg}
							alt={"discount svg"}
						/>
						<span>-12%</span>
					</div>
				</div>
				<span className={classes.lastPrice}>last price $ 1410,87</span>
			</div>
			<BuyOptions />
			<button className={`${classes["buy-btn"]} ${classes.button}`}>
				Buy Now
			</button>
			<button className={`${classes["add-cart-btn"]} ${classes.button}`}>
				Add to cart
			</button>
		</div>
	)
}
