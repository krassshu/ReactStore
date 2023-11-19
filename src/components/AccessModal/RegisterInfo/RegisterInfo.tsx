import Image from "next/image"
import classes from "./RegisterInfo.module.css"
import errorIcon from "@/assets/icons/error.svg"
import doneIcon from "@/assets/icons/done.svg"

interface RegisterInfoI {
	isError: boolean
}

export default function RegisterInfo(props: RegisterInfoI) {
	return (
		<>
			<div className={classes.icon}>
				{props.isError ? (
					<Image
						src={errorIcon}
						alt={"error"}
					/>
				) : (
					<Image
						src={doneIcon}
						alt={"done"}
					/>
				)}
			</div>
			<span
				className={`${classes.title} ${
					props.isError ? classes.errorText : classes.doneText
				}`}
			>
				{props.isError ? "Oops. " : "Well done"}
			</span>
			<span className={`${classes.mess}`}>
				{props.isError
					? "Unfortunately, there was a problem during creating your account. try again later."
					: "Congratulation your account has been successfully created."}
			</span>
		</>
	)
}
