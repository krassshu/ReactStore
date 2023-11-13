import classes from "./OurServices.module.css"
import computerImg from "@/assets/icons/pc.svg"
import guardImg from "@/assets/icons/guard.svg"
import deliveryImg from "@/assets/icons/delivery.svg"
import timerImg from "@/assets/icons/support.svg"
import Image from "next/image"

export default function OurServices() {
	return (
		<section className={classes.box}>
			<div className={classes.item}>
				<Image
					src={computerImg}
					alt="Latest and Greatest Tech"
				/>
				<span>Latest and Greatest Tech</span>
			</div>
			<div className={classes.item}>
				<Image
					src={guardImg}
					alt="Guarantee"
				/>
				<span>Guarantee</span>
			</div>
			<div className={classes.item}>
				<Image
					src={deliveryImg}
					alt="Free Shipping over 100$"
				/>
				<span>Free Shipping over 100$</span>
			</div>
			<div className={classes.item}>
				<Image
					src={timerImg}
					alt="24/7 Support"
				/>
				<span>24/7 Support</span>
			</div>
		</section>
	)
}
