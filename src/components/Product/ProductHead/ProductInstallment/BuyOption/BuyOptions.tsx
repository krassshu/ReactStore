"use client"

import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import React from "react"
import FormControlLabel from "@mui/material/FormControlLabel"
import classes from "./BuyOptions.module.css"

const installments = [
	{ monts: 3, fee: 1.1 },
	{ monts: 6, fee: 1.2 },
	{ monts: 12, fee: 1.3 },
	{ monts: 18, fee: 1.4 },
]

export default function BuyOptions() {
	const [value, setValue] = React.useState("now")

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value)
	}

	return (
		<div className={classes["buy-option"]}>
			<RadioGroup
				aria-labelledby="demo-controlled-radio-buttons-group"
				name="controlled-radio-buttons-group"
				value={value}
				onChange={handleChange}
			>
				<FormControlLabel
					value="now"
					control={<Radio />}
					label="Pay Now"
				/>
				<FormControlLabel
					value="installments"
					control={<Radio />}
					label="Buy in installments"
				/>
				<span className={classes["installments-desc"]}>
					choose your installments period
				</span>
			</RadioGroup>
			<div className={classes['month-box']}>
				{installments.map((el, i) => (
					<button
						key={i}
						className={classes.month}
					>
						<span>{el.monts}</span>
						<span className={classes.desc}>Months</span>
					</button>
				))}
			</div>
			<span className={classes["monthly-installment"]}>
				{"$433.00"}
				<p>/Month</p>
			</span>
		</div>
	)
}
