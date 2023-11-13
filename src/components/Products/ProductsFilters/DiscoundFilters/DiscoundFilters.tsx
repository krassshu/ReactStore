"use client"
import React, { useState } from "react"
import CustomSwitch from "@/components/UI/CustomElements/CustomSwitch"
import classes from "./DiscoundFilters.module.css"

export default function DiscoundFilters() {
	const [isDiscountEnabled, setIsDiscountEnabled] = useState(false)

	const handleSwitchChange = () => {
		setIsDiscountEnabled((prev) => !prev)
	}

	return (
		<div className={classes.wrapper}>
			<span>Discound</span>
			<CustomSwitch
				checked={isDiscountEnabled}
				onChange={handleSwitchChange}
			/>
		</div>
	)
}
