"use client"

import classes from "./ProductsItem.module.css"
import ProductDetails from "./ProductDetails/ProductDetails"
import spacerImg from "@/assets/ui-elements/spacer.svg"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import AddProductToBag from "./AddProductToBag/AddProductToBag"

export default function ProductsItem(props: ProductItem) {
	const [isHover, setIsHover] = useState(false)
	// console.log(props)

	return (
		<div
			className={classes.item}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			title={props.productName}
		>
			<Link
				href={`/p/${props.id || props._id}`}
				className={classes.link}
			>
				<div className={classes["product-img"]}>
					{props.imagePath && props.imagePath[0]?.medium && (
						<Image
							src={props.imagePath[0].medium}
							alt={props.productName}
							fill={true}
							style={{ objectFit: "contain" }}
						/>
					)}
				</div>
				<div className={classes.spacer}>
					<Image
						src={spacerImg}
						alt="spacer"
					/>
				</div>
			</Link>
			<ProductDetails
				id={props.id || props._id}
				productName={props.productName}
				price={props.price}
				lastPrice={props.lastPrice}
				rating={props.rating}
			/>
			<AnimatePresence>
				{isHover && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={classes.bag}
					>
						<AddProductToBag
							id={props.id || props._id}
							productName={props.productName}
							price={props.price}
							imagePath={props.imagePath?.[0]?.medium}
							colors={props.colors?.[0]}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
