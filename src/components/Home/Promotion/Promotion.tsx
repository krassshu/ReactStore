import classes from "./Promotion.module.css"
import PromotedProduct from "./PromotedProduct/PromotedProduct"
import UpcomingPromotion from "./UpcomingPromotion/UpcomingPromotion"

export default function Promotion() {
	return (
		<section className={classes.promoted}>
			<UpcomingPromotion />
			<PromotedProduct />
		</section>
	)
}
