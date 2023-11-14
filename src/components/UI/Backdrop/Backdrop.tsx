"use client"

import classes from "./Backdrop.module.css"
import React, { useEffect, useState } from "react"

export default function Backdrop() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsVisible(true)
		}, 0)

		return () => clearTimeout(timeoutId)
	}, [])

	return (
		<div className={`${classes.backdrop} ${isVisible && classes.fadeIn}`} />
	)
}
