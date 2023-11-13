import classes from "./Breadcrumb.module.css"
export default function () {
	return (
		<div className={classes.breadcrumbs}>
			<span>Home</span>
			<span className={classes.arrow}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="Vector"
						d="M16.8006 12C16.8006 12.7 16.5306 13.4 16.0006 13.93L9.48062 20.45C9.19062 20.74 8.71062 20.74 8.42063 20.45C8.13063 20.16 8.13063 19.68 8.42063 19.39L14.9406 12.87C15.4206 12.39 15.4206 11.61 14.9406 11.13L8.42063 4.60998C8.13063 4.31998 8.13063 3.83998 8.42063 3.54998C8.71062 3.25998 9.19062 3.25998 9.48062 3.54998L16.0006 10.07C16.5306 10.6 16.8006 11.3 16.8006 12Z"
						fill="#717171"
					/>
				</svg>
			</span>
			<span className={classes.active}>FAQs</span>
		</div>
	)
}