import Image from "next/image"
import classes from "./CommentsToShow.module.css"
import RatingStarBlue from "@/components/UI/RatingStarBlue/RatingStarBlue"

export default function CommentsToShow() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.comment}>
				<div className={classes.head}>
					<div className={classes.user}>
						<Image
							src={"/sd"}
							alt={"s"}
							width={60}
							height={60}
						/>
						<div className={classes["user-data"]}>
							<span className={classes.name}>Gabriel</span>
							<p className={classes["comment-date"]}>July 28, 2023</p>
						</div>
					</div>
					<div className={classes.rating}>
						<RatingStarBlue rating={4.4} />
					</div>
				</div>
			</div>
		</div>
	)
}
