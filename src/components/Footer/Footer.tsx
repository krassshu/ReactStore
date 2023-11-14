import classes from "./Footer.module.css"
import MainFooter from "./MainFooter/MainFooter"
import PolicyFooter from "./PolicyFooter/PolicyFooter"

export default function Footer() {
	return (
		<footer className={classes.footer}>
			<MainFooter />
			<PolicyFooter />
		</footer>
	)
}
