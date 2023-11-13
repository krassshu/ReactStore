import * as React from "react"
import { styled } from "@mui/material/styles"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch, { SwitchProps } from "@mui/material/Switch"

const IOSSwitch = styled((props: SwitchProps & { checked: boolean }) => (
	<Switch
		focusVisibleClassName=".Mui-focusVisible"
		disableRipple
		{...props}
		checked={props.checked}
	/>
))(({ theme }) => ({
	width: 70,
	height: 32,
	padding: 0,
	"& .MuiSwitch-switchBase": {
		padding: 0,
		margin: 2,
		transitionDuration: "300ms",
		"&.Mui-checked": {
			transform: "translateX(35px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				backgroundColor: "#0951BE",
				opacity: 1,
				border: 0,
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: 0.5,
			},
		},
		"&.Mui-focusVisible .MuiSwitch-thumb": {
			color: "#33cf4d",
			border: "6px solid #fff",
		},
		"&.Mui-disabled .MuiSwitch-thumb": {
			color: theme.palette.grey[100],
		},
		"&.Mui-disabled + .MuiSwitch-track": {
			opacity: 0.7,
		},
	},
	"& .MuiSwitch-thumb": {
		boxSizing: "border-box",
		width: 28,
		height: 28,
	},
	"& .MuiSwitch-track": {
		borderRadius: 24,
		backgroundColor: "#E9E9EA",
		opacity: 1,
		transition: theme.transitions.create(["background-color"], {
			duration: 500,
		}),
	},
}))

export default function CustomSwitch({
	checked,
	onChange,
}: {
	checked: boolean
	onChange: () => void
}) {
	return (
		<FormControlLabel
			control={
				<IOSSwitch
					sx={{ m: 1 }}
					checked={checked}
					onChange={onChange}
				/>
			}
			label=""
		/>
	)
}
