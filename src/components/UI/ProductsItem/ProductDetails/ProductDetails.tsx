import { countRating } from "@/components/Util/rating"
import classes from "./ProductDetails.module.css"
import Link from "next/link"
import { NumericFormat } from "react-number-format"

export default function ProductDetails(props: any) {
	const { like = 0, dislike = 0 } = props.rating || {}
	const rating = countRating(like, dislike)

	return (
		<>
			<Link
				href={`/p/${props.id}`}
				className={classes.link}
			>
				<h6 className={classes["model-info"]}>{props.productName}</h6>
			</Link>
			<div className={classes.meta}>
				<p className={classes.price}>
					<NumericFormat
						value={props.price?.toFixed(2) || 0}
						displayType={"text"}
						thousandSeparator={true}
						prefix={"$"}
					/>
				</p>
				<div className={classes.rating}>
					<i className={classes.star}></i>
					<p className={classes["rating-range"]}>{rating}</p>
				</div>
			</div>
		</>
	)
}
