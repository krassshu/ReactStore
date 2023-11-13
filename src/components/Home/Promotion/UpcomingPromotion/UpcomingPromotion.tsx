import classes from "./UpcomingPromotion.module.css"
import promotedImg from "@/assets/promotion/ip15.png"
import Counter from "./Counter/Counter"
import Image from "next/image"

export default function UpcomingPromotion() {
	return (
		<div className={classes.box}>
			<div className={classes.section}>
				<h5 className={classes.header}>
					<p>Iphone</p> 15 Series
				</h5>
				<Image
					src={promotedImg}
					alt="Iphone 15"
					className={classes.img}
				/>
			</div>
			<div className={`${classes.section} ${classes.r}`}>
				<Counter />
				<div className={classes.description}>
					<span>It feels good to be the first</span>
					<p>
						Get ready for the future of smartphones.Experience innovation like
						never before. Stay tuned for the big iPhone 15 pre-sale.
					</p>
				</div>
				<button className={classes["register-btn"]}>Register Now</button>
			</div>
			<div className={`${classes.elipse} ${classes.t}`}></div>
			<div className={`${classes.elipse} ${classes.l}`}></div>
			<div className={`${classes.elipse} ${classes.rb}`}></div>
		</div>
	)
}
