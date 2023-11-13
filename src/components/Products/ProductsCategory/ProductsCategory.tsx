import classes from "./ProductsCategory.module.css"
import mobileImg from "@/assets/category-logo/mobile.svg"
import laptopImg from "@/assets/category-logo/monitor.svg"
import tabletImg from "@/assets/category-logo/tablets.svg"
import audioImg from "@/assets/category-logo/headphones.svg"
import wearableImg from "@/assets/category-logo/watch-status.svg"
import cameraImg from "@/assets/category-logo/camera.svg"
import gamingImg from "@/assets/category-logo/game.svg"
import networkImg from "@/assets/category-logo/data.svg"
import accessoriesImg from "@/assets/category-logo/devices.svg"
import Image from "next/image"

export default function ProductsCategory() {
	const categoryArr = [
		{ img: mobileImg, desc: "Mobile" },
		{ img: laptopImg, desc: "Laptop" },
		{ img: tabletImg, desc: "Tablet" },
		{ img: audioImg, desc: "Audio" },
		{ img: wearableImg, desc: "Wearable" },
		{ img: cameraImg, desc: "Camera" },
		{ img: gamingImg, desc: "Gaming" },
		{ img: networkImg, desc: "Network" },
		{ img: accessoriesImg, desc: "Accessories" },
	]

	return (
		<div className={classes.wrapper}>
			{categoryArr.map((cat, i) => (
				<div
					className={classes.el}
					key={i}
				>
					<Image
						src={cat.img}
						alt={cat.desc}
					/>
					<span>{cat.desc}</span>
				</div>
			))}
		</div>
	)
}
