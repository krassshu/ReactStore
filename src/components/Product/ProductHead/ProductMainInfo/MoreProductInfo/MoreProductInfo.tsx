import classes from "./MoreProductInfo.module.css"

export default function MoreProductInfo() {
	return (
		<div className={classes.wrapper}>
			<ul>
				<li className={classes.item}>
					<p>
						brand:
						<span> Apple</span>
					</p>
				</li>
				<li className={classes.item}>
					<p>
						Model Name:
						<span>Macbook Pro</span>
					</p>
				</li>
				<li className={classes.item}>
					<p>
						Screen Size:
						<span>13.3 Inches</span>
					</p>
				</li>
			</ul>
		</div>
	)
}
