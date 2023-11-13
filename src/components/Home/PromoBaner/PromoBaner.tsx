import Image from "next/image"
import classes from "./PromoBaner.module.css"
import smartWatchImg from "@/assets/promotion/smart-watch.png"

export default function PromoBaner() {
	return (
		<section className={classes.box}>
			<div className={classes.frame}>
				<h5>Smart watch</h5>
				<span>Various designs and brands</span>
				<button>view</button>
			</div>
			<div className={classes.frame}>
				<Image
					src={smartWatchImg}
					alt={"smart watch"}
				/>
			</div>
			<div className={classes.ellipse}></div>
		</section>
	)
}
