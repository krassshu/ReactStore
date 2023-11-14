import Image from "next/image"
import BagItem from "./BagItem/BagItem"
import classes from "./HeaderBag.module.css"

import shoppingIcon from "@/assets/icons/shopping-cart.svg"

export default function HeaderBag() {
	return (
		<div className={classes.wrapper}>
			<span className={classes.amount}>3 items</span>
			<div className={classes["items-wrapper"]}>
				<BagItem />
				<BagItem />
				<BagItem />
				<BagItem />
			</div>
			<div className={classes.summary}>
				<div className={classes.total}>
					<span className={classes["total-head"]}>Grand total</span>
					<span className={classes.price}>$543.02</span>
				</div>
				<button className={classes.process}>
					Proceed to Cart{" "}
					<Image
						src={shoppingIcon}
						alt={"shopping icon"}
					/>
				</button>
			</div>
		</div>
	)
}
