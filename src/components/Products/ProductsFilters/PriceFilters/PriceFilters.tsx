"use client"

import classes from "./PriceFilters.module.css"
import Slider from "@mui/material/Slider"
import { useState } from "react"

function valuetext(value: number) {
	console.log(value)
	return value
}

export default function PriceFilters() {
	const [value, setValue] = useState<number[]>([0, 10000])

	const handleChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number[])
	}

	const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const minValue = parseInt(event.target.value)
		setValue([minValue, value[1]])
	}

	const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const maxValue = parseInt(event.target.value)
		setValue([value[0], maxValue])
	}

	return (
		<div className={classes.acord}>
			<div className={classes.head}>
				<span>Price</span>
				<button className={classes.arrow}>{" > "}</button>
			</div>
			<div className={classes.price}>
				<div className={classes.inputs}>
					<input
						type="number"
						name="min"
						value={value[0]}
						placeholder={"min."}
						onChange={handleMinInputChange}
					/>
					<input
						type="number"
						name="max"
						value={value[1]}
						placeholder={"max."}
						onChange={handleMaxInputChange}
					/>
				</div>
				<Slider
					getAriaLabel={() => "Temperature range"}
					value={value}
					onChange={handleChange}
					min={0}
					max={10000}
				/>
			</div>
		</div>
	)
}
