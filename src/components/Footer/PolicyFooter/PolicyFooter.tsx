import Link from "next/link"
import classes from "./PolicyFooter.module.css"

export default function PolicyFooter() {
	const date = new Date().getFullYear()

	return (
		<div className={`${classes.policy} spacer`}>
			<div className={classes.copyright}>
				<span>&copy;</span>
				<span>{date} Tech Heim.</span>
			</div>
			<div className={classes.info}>
				<Link href={"#"}>cookie settings</Link>
				<Link href={"#"}>Privacy Policy</Link>
				<Link href={"#"}>Terms and Conditions </Link>
				<Link href={"#"}>Imprint</Link>
			</div>
		</div>
	)
}
