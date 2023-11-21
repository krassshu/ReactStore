"use client"

import Image from "next/image"

import classes from "./AccountInput.module.css"
import editIcon from "@/assets/icons/edit.svg"
import { useState } from "react"

export type AccountInputProps = {
	imageProps: { src: any; alt: string }
	inputProps: React.InputHTMLAttributes<HTMLInputElement>
	title: string
}

const AccountInput: React.FC<AccountInputProps> = ({
	imageProps,
	inputProps,
	title,
}) => {
	const [isDisabled, setIsDisabled] = useState(true)

	const onToggleDisable = () => {
		setIsDisabled(!isDisabled)
	}

	return (
		<label
			htmlFor={inputProps.id}
			className={classes.inputLabel}
		>
			<span className={classes.label}>{title}</span>
			<div className={classes.inputCon}>
				<Image {...imageProps} />
				<input
					{...inputProps}
					disabled={isDisabled}
				/>
				<button
					className={classes.editBtn}
					onClick={onToggleDisable}
				>
					<Image
						src={editIcon}
						alt={"edit icon"}
						title={"Edit field"}
					/>
				</button>
			</div>
		</label>
	)
}

export default AccountInput
