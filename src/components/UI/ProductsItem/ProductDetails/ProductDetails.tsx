import { countRating } from "@/components/Util/rating"
import classes from "./ProductDetails.module.css"

export default function ProductDetails(props: any) {
	const { like = 0, dislike = 0 } = props.rating || {}
	const rating = countRating(like, dislike)

	return (
		<>
			<h6 className={classes["model-info"]}>{props.productName}</h6>
			<div className={classes.meta}>
				<p className={classes.price}>{props.price}</p>
				<div className={classes.rating}>
					<i className={classes.star}></i>
					<p className={classes["rating-range"]}>{rating}</p>
				</div>
			</div>
		</>
	)
}
