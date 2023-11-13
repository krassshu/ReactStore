"use client"

import { useEffect, useState } from "react"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"

import classes from "./SortingProducts.module.css"

export default function SortingProducts() {
	const [sort, setSort] = useState("featured")

	const handleChange = (event: SelectChangeEvent) => {
		setSort(event.target.value)
	}

	return (
		<div className={classes.select}>
			<Select
				value={sort}
				onChange={handleChange}
				inputProps={{ "aria-label": "Without label" }}
			>
				<MenuItem value={"featured"}>Sort by: featured</MenuItem>
				<MenuItem value={"ascending"}>Price: ascending</MenuItem>
				<MenuItem value={"descending"}>Price: descending</MenuItem>
				<MenuItem value={"new"}>New Arrivals </MenuItem>
			</Select>
		</div>
	)
}
