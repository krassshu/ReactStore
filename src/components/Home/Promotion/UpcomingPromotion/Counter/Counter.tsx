import classes from "./Counter.module.css"

export default function Counter() {
	return (
		<div className={classes.counter}>
			<div className={classes.square}>
				<p>8</p>
				<p>Days</p>
			</div>
			<div className={classes.square}>
				<p>8</p>
				<p>Hour</p>
			</div>
			<div className={classes.square}>
				<p>8</p>
				<p>Min</p>
			</div>
			<div className={classes.square}>
				<p>8</p>
				<p>Sec</p>
			</div>
		</div>
	)
}
