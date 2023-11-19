"use client"

import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { CircularProgress } from "@mui/material"

import classes from "./AccessModal.module.css"
import Login from "./Login/Login"
import Register from "./Register/Register"
import RegisterInfo from "./RegisterInfo/RegisterInfo"

export default function AccessModal() {
	const [value, setValue] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	if (isError) {
		setTimeout(() => {
			setIsError(false)
		}, 2500)
	}

	if (isSuccess) {
		setTimeout(() => {
			setIsSuccess(false)
			setValue(0)
		}, 2500)
	}

	if (isError) {
		return (
			<div className={`${classes.container} ${classes.error}`}>
				<RegisterInfo isError={isError} />
			</div>
		)
	} else if (isLoading) {
		return (
			<div className={classes.container}>
				<CircularProgress size={100} />
			</div>
		)
	} else if (isSuccess) {
		return (
			<div className={`${classes.container} ${classes.done}`}>
				<RegisterInfo isError={isError} />
			</div>
		)
	} else {
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
				{value === 0 ? (
					<Login
						setIsLoading={setIsLoading}
						setIsError={setIsError}
					/>
				) : (
					<Register
						setIsLoading={setIsLoading}
						setIsError={setIsError}
						setIsSuccess={setIsSuccess}
					/>
				)}
			</div>
		)
	}
}
