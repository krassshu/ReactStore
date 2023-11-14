import CommentsToShow from "./CommentsToShow/CommentsToShow"
import LeaveCommentsProduct from "./LeaveCommentsProduct/LeaveCommentsProduct"
import classes from "./ProductComments.module.css"

export default function ProductComments() {
	return (
		<div className={classes.section}>
			<h4>Comments</h4>
			<div className={classes.wrapper}>
				<LeaveCommentsProduct />
				<CommentsToShow />
			</div>
		</div>
	)
}
