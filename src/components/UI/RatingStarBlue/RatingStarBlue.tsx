import classes from "./RatingStarBlue.module.css"
import starSvg from "@/assets/icons/white-star.svg"

import Image from "next/image"

export interface Rating {
	rating: number
}

export default function RatingStarBlue(props: Rating) {
	return (
		<span className={classes.star}>
			<Image
				src={starSvg}
				alt={"rating star"}
			/>
			{props.rating}
		</span>
	)
}
