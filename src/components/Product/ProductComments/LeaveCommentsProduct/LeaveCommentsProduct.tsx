"use client"

import { useState } from "react"
import classes from "./LeaveCommentsProduct.module.css"

export default function LeaveCommentsProduct() {
	const [inputValue, setInputValue] = useState("")

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	return (
		<div className={classes.comments}>
			<span className={classes.desc}>
				leave your comments here for other customers
			</span>
			<textarea
				name="comment"
				className={`${classes["comment-input"]} ${
					inputValue ? classes.hasContent : ""
				}`}
				placeholder={"Share your thoughts about this product here"}
				onChange={handleInputChange}
				value={inputValue}
			/>
			<button className={classes["comments-btn"]}>Comment</button>
		</div>
	)
}
