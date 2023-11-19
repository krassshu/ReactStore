import classes from "./CategoryItem.module.css"

import Image from "next/image"

export default function CategoryItem(props: any) {
	return (
		<div
			className={classes.item}
			tabIndex={0}
		>
			<Image
				src={props.path}
				alt={props.category}
			/>
			<p>{props.category}</p>
		</div>
	)
}
