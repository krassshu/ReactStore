import classes from "./HeaderCategory.module.css"

import Link from "next/link"
import Image from "next/image"

import mobileSvg from "@/assets/icons/mobile.svg"
import laptopsSvg from "@/assets/icons/monitor.svg"
import watchesSvg from "@/assets/icons/watch.svg"
import audioSvg from "@/assets/icons/headphone.svg"
import cameraSvg from "@/assets/icons/camera.svg"
import gamingSvg from "@/assets/icons/game.svg"
import networkSvg from "@/assets/icons/data.svg"
import accessoriesSvg from "@/assets/icons/devices.svg"

export default function HeaderCategory() {
	return (
		<ul className={classes.categoryItems}>
			<li className={classes.categoryItem}>
				<Link href={"/products"}>
					<Image
						src={mobileSvg}
						alt={"mobile icon"}
					/>
					<span>Mobile Phones</span>
				</Link>
			</li>
			<li className={classes.categoryItem}>
				<Link href={"/products"}>
					<Image
						src={laptopsSvg}
						alt={"mobile icon"}
					/>
					<span>Mobile Phones</span>
				</Link>
			</li>
			<li className={classes.categoryItem}>
				<Link href={"/products"}>
					<Image
						src={mobileSvg}
						alt={"mobile icon"}
					/>
					<span>Mobile Phones</span>
				</Link>
			</li>
			<li className={classes.categoryItem}>
				<Link href={"/products"}>
					<Image
						src={watchesSvg}
						alt={"mobile icon"}
					/>
					<span>Mobile Phones</span>
				</Link>
			</li>
			<li className={classes.categoryItem}>
				<Link href={"/products"}>
					<Image
						src={audioSvg}
						alt={"mobile icon"}
					/>
					<span>Mobile Phones</span>
				</Link>
			</li>
			<li className={classes.categoryItem}>
				<Link href={"/products"}>
					<Image
						src={cameraSvg}
						alt={"mobile icon"}
					/>
					<span>Mobile Phones</span>
				</Link>
			</li>
			<li className={classes.categoryItem}>
				<Link href={"/products"}>
					<Image
						src={gamingSvg}
						alt={"mobile icon"}
					/>
					<span>Mobile Phones</span>
				</Link>
			</li>
			<li className={classes.categoryItem}>
				<Link href={"/products"}>
					<Image
						src={networkSvg}
						alt={"mobile icon"}
					/>
					<span>Mobile Phones</span>
				</Link>
			</li>
			<li className={classes.categoryItem}>
				<Link href={"/products"}>
					<Image
						src={accessoriesSvg}
						alt={"mobile icon"}
					/>
					<span>Mobile Phones</span>
				</Link>
			</li>
		</ul>
	)
}
