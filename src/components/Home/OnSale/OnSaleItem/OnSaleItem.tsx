import classes from "./OnSaleItem.module.css"
import { OnSaleData } from "../OnSale"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function OnSaleItem(props: OnSaleData) {
	const [currentPosition, setCurrentPosition] = useState(0)

	const discount: number = Math.floor(
		(props.currentPrice / props.lastPrice) * 100 - 100
	)

	useEffect(() => {
		const currentPosition = () => {
			if (props.index === 0) {
				setCurrentPosition(props.index * 184 - props.currentPosition)
			} else {
				setCurrentPosition(props.index * 196 - props.currentPosition)
			}
		}
		currentPosition()
	}, [props])

	return (
		<div
			className={classes.item}
			style={{ left: currentPosition + "px" }}
		>
			<Image
				width={"0"}
				height={"136"}
				src={props.img}
				alt={props.itemDescription}
			/>
			<div>
				<p className={classes.description}>{props.itemDescription}</p>
				<div className={classes.price}>
					<p className={classes["last-price"]}>{props.lastPrice}</p>
					<p className={classes["current-price"]}>{props.currentPrice}</p>
				</div>
			</div>
			<span className={classes.discount}>{discount}%</span>
		</div>
	)
}
