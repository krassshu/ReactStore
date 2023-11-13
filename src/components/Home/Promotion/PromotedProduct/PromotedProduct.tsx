import classes from "./PromotedProduct.module.css"
import promotedImg from "@/assets/promotion/ps5.png"
import Image from "next/image"

export default function PromotedProduct() {
	return (
		<div className={classes.box}>
			<h4>Play Station 5</h4>
			<div className={classes.item}>
				<div className={classes["main-content"]}>
					<span>Digital Edition + 2 TB</span>
					<Image
						src={promotedImg}
						alt="PS5"
					/>
				</div>
				<button className={classes["buy-btn"]}>Buy Now</button>
			</div>
			<div className={`${classes.elipse}`}></div>
			<div className={`${classes["small-elipse"]}`}></div>
		</div>
	)
}
