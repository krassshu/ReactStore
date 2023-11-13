// @ts-nocheck
"use client"

import classes from "./OnSale.module.css"
import OnSaleItem from "./OnSaleItem/OnSaleItem"
import { useState, useRef, useEffect } from "react"

export interface OnSaleData {
	currentPosition: number
	index: number
	itemDescription: string
	lastPrice: number
	currentPrice: number
	img: string
}

export default function OnSale() {
	const ref = useRef<HTMLDivElement | null>(null)

	const [currentPosition, setCurrentPosition] = useState(0)
	const [lastElementPosition, setLastElementPosition] = useState(0)
	const [width, setWidth] = useState(0)

	const arrayElements = 7
	const itemSize = 196

	useEffect(() => {
		if (ref.current) {
			setWidth(ref.current.offsetWidth)
			setLastElementPosition(arrayElements * itemSize)
		}
	}, [])

	function onSwitchLeft() {
		if (currentPosition === 0) {
			return
		} else if (currentPosition >= itemSize) {
			setCurrentPosition(currentPosition - itemSize)
			setLastElementPosition(lastElementPosition + itemSize)
		}
	}

	function onSwitchRight() {
		if (lastElementPosition < width) {
			return
		} else {
			setCurrentPosition(currentPosition + itemSize)
			setLastElementPosition(lastElementPosition - itemSize)
		}
	}

	return (
		<section className={classes.onsale}>
			<div className={classes.description}>
				<div className={classes["desc-motto"]}>
					<h4>Products On Sale</h4>
					<span>Shop Now!</span>
				</div>
				<a>View all {">"}</a>
			</div>
			<div
				className={classes.items}
				ref={ref}
			>
				<OnSaleItem
					itemDescription="/dsa"
					img="/asd"
					currentPrice={15}
					lastPrice={20}
					index={0}
					currentPosition={currentPosition}
				/>
				<OnSaleItem
					itemDescription="/dsa"
					img="/asd"
					currentPrice={15}
					lastPrice={20}
					index={1}
					currentPosition={currentPosition}
				/>
				<OnSaleItem
					itemDescription="/dsa"
					img="/asd"
					currentPrice={15}
					lastPrice={20}
					index={2}
					currentPosition={currentPosition}
				/>
				<OnSaleItem
					itemDescription="/dsa"
					img="/asd"
					currentPrice={15}
					lastPrice={20}
					index={3}
					currentPosition={currentPosition}
				/>
				<OnSaleItem
					itemDescription="/dsa"
					img="/asd"
					currentPrice={15}
					lastPrice={20}
					index={4}
					currentPosition={currentPosition}
				/>
				<OnSaleItem
					itemDescription="/dsa"
					img="/asd"
					currentPrice={15}
					lastPrice={20}
					index={5}
					currentPosition={currentPosition}
				/>
				<OnSaleItem
					itemDescription="/dsa"
					img="/asd"
					currentPrice={15}
					lastPrice={20}
					index={6}
					currentPosition={currentPosition}
				/>
			</div>
			<div className={classes["navigate-arrows"]}>
				<button onClick={onSwitchLeft}>
					<i className="arrow-icon"></i>
				</button>
				<button onClick={onSwitchRight}>
					<i className="arrow-icon"></i>
				</button>
			</div>
			<div className={classes.decorate}></div>
		</section>
	)
}
