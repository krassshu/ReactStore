import Image from "next/image"
import classes from "./HeaderCategoryPreview.module.css"

export default function HeaderCategoryPreview() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.item}>
				<Image
					width={152}
					height={187}
					src={"/#"}
					alt={"s"}
				/>
				<span>Watch & Earpods</span>
			</div>
		</div>
	)
}
