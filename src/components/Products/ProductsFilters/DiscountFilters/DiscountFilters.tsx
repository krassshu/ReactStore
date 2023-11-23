"use client"
import React, { useState } from "react"
import CustomSwitch from "@/components/UI/CustomElements/CustomSwitch"
import classes from "./DiscountFilters.module.css"

export default function DiscountFilters() {
	const [isDiscountEnabled, setIsDiscountEnabled] = useState(false)

	const handleSwitchChange = () => {
		setIsDiscountEnabled((prev) => !prev)
	}

	return (
		<div className={classes.wrapper}>
			<span>Discount</span>
			<CustomSwitch
				checked={isDiscountEnabled}
				onChange={handleSwitchChange}
			/>
		</div>
	)
}
