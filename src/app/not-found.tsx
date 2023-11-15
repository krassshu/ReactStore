import Link from "next/link"
import classes from "./not-found.module.css"

export default function ErrorPage() {
	return (
		<div className={classes.container}>
			<h1>Page not found</h1>
			<p>Looks like there is no such page.</p>
			<button>
				<Link href={"/"}>Return to home page</Link>
			</button>
		</div>
	)
}
