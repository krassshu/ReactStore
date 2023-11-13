import classes from "./ProductDetails.module.css"

export default function ProductDetails() {
	return (
		<>
			<h6 className={classes["model-info"]}>Iphone 14 pro max 256 gb</h6>
			<div className={classes.meta}>
				<p className={classes.price}>123</p>
				<div className={classes.rating}>
					<i className={classes.star}></i>
					<p className={classes["rating-range"]}>4.3</p>
				</div>
			</div>
		</>
	)
}
