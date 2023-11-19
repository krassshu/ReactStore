"use client"

import classes from "./ProductsItem.module.css"
import ProductDetails from "./ProductDetails/ProductDetails"
import spacerImg from "@/assets/ui-elements/spacer.svg"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import AddProductToBag from "./AddProductToBag/AddProductToBag"

export default function ProductsItem(props: any) {
	const [isHover, setIsHover] = useState(false)

	return (
		<div
			className={classes.item}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<Link
				href={`/products/${props.id}`}
				className={classes.link}
			>
				<div className={classes["product-img"]}>
					<Image
						src={props.imagePath?.[0].medium}
						alt={props.productName}
						fill={true}
						style={{ objectFit: "contain" }}
					/>
				</div>
			</Link>
			<div className={classes.spacer}>
				<Image
					src={spacerImg}
					alt="spacer"
				/>
			</div>
			<ProductDetails
				id={props.id}
				productName={props.productName}
				price={props.price}
				lastPrice={props.lastPrice}
				rating={props.rating}
				imagePath={[]}
			/>
			<AnimatePresence>
				{isHover && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={classes.bag}
					>
						<AddProductToBag />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
