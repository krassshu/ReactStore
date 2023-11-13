"use client"
import classes from "./BasedFilter.module.css"

export default function BasedFilter() {
	return (
		<>
			<div className={classes.acord}>
				<div className={classes.head}>
					<span>Brand</span>
					<button className={classes.arrow}>{" > "}</button>
				</div>
				<div className={classes.brands}>
					<label
						htmlFor={"brand"}
						className={classes.label}
					>
						<input
							type="checkbox"
							id={"brand"}
						/>
						<div className={classes.desc}>
							<span>Cos</span>
							<p className={classes.quantity}>(123)</p>
						</div>
					</label>
				</div>
			</div>
		</>
	)
}
