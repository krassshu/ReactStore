import Image from "next/image"
import classes from "./CommentsToShow.module.css"
import RatingStarBlue from "@/components/UI/RatingStarBlue/RatingStarBlue"
import likeSvg from "@/assets/icons/like.svg"

export default function CommentsToShow() {
	return (
		<div className={classes.wrapper}>
			<div className={classes["comment-box"]}>
				<div className={classes.head}>
					<div className={classes.user}>
						<Image
							src={"/sd"}
							alt={"s"}
							width={60}
							height={60}
							className={classes.avatar}
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
				<span className={classes.comment}>
					This macbook air at first feels just so big to me using it for school,
					and after a while, it felt as a perfect size. I look at it sometimes
					and realize how portable and small it is, but IT FEELS AS BIG AS LIKE
					A TV SCREEN. It's not a huge computer, but when your doing work and
					typing or whatever watching youtube it feels like a movie screen,
					beautiful. I never had such a good computer that just feels like a
					breath of fresh air. If you are contemplating on buying one, I would
					get 512 GB of storage and 16 ram. You will not be disappointed if you
					buy this no matter what, I strongly recommend it.
				</span>

				<button className={classes["show-more-btn"]}>Show More</button>
				<div className={classes["comment-rating"]}>
					<button className={`${classes.like} ${classes["rating-btn"]}`}>
						<Image
							src={likeSvg}
							alt={"liek"}
						/>
					</button>
					<span>8</span>
					<span className={classes.line}>|</span>
					<button className={`${classes.dislike} ${classes["rating-btn"]}`}>
						<Image
							src={likeSvg}
							alt={"dislike"}
						/>
					</button>
					<span>0</span>
				</div>
			</div>
		</div>
	)
}
