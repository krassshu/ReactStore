import classes from "./LeaveCommentsProduct.module.css"

export default function LeaveCommentsProduct() {
	return (
		<div className={classes.comments}>
			<span className={classes.desc}>
				leave your comments here for other customers
			</span>
			<textarea
				name="comment"
				className={classes["comment-input"]}
				placeholder={"Share your thoughts about this product here"}
			/>
			<button className={classes["comments-btn"]}>Comment</button>
		</div>
	)
}
