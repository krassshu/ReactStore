"use client"

import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import classes from "./AccessModal.module.css"
import Login from "./Login/Login"
import Register from "./Register/Register"

export default function AccessModal() {
	const [value, setValue] = useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<div className={classes.container}>
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="basic tabs example"
				variant="fullWidth"
				className={classes.tab}
			>
				<Tab label="login" />
				<Tab label="registration" />
			</Tabs>
			{value === 0 ? <Login /> : <Register />}
		</div>
	)
}
