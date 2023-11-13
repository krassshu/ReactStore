"use client"

import Breadcrumb from "@/components/UI/Breadcrumb/Breadcrumb"
import classes from "./Faq.module.css"
import FaqElements from "./FaqElements/FaqElements"
import FaqNavigation from "./FaqNavigation/FaqNavigation"

export default function Faq() {
	return (
		<>
			<Breadcrumb />
			<div className={classes.w}>
				<div className={classes.s}>
					<header className={classes.header}>
						<h1>Frequently Asked Questions</h1>
					</header>
					<section className={classes.section}>
						<FaqNavigation />
						<FaqElements />
					</section>
				</div>
			</div>
		</>
	)
}
