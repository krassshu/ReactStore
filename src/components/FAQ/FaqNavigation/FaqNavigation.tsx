import classes from "./FaqNavigation.module.css"

export default function FaqNavigation() {
	return (
		<div className={classes.wr}>
			<div className={classes.navigation}>
				<span>Table of Contents</span>
				<ul className={classes.elements}>
					<li className={classes.active}>General</li>
					<li>Trusts & Safety</li>
					<li>Services</li>
					<li>Billing</li>
				</ul>
			</div>
		</div>
	)
}
