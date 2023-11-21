import Container from "@/components/UI/Container/Container"
import classes from "./SecurityAndAccess.module.css"
import Head from "../Head/Head"
import AccountInput, { AccountInputProps } from "../AccountInput/AccountInput"
import passwordIcon from "@/assets/icons/key.svg"
import phoneIcon from "@/assets/icons/call.svg"

const inputData: AccountInputProps[] = [
	{
		imageProps: { src: passwordIcon, alt: "password icon" },
		inputProps: { type: "password", id: "password", placeholder: "" },
		title: "",
	},
	{
		imageProps: { src: phoneIcon, alt: "tel icon" },
		inputProps: { type: "tel", id: "tel", placeholder: "" },
		title: "",
	},
]

export default function SecurityAndAccess() {
	return (
		<Container>
			<Head
				title={"Security settings"}
				desc={"Change password and phone number"}
			/>
			<div className={classes.wrapper}>
				{inputData.map((input, i) => (
					<AccountInput
						key={i}
						title={input.title}
						imageProps={input.imageProps}
						inputProps={input.inputProps}
					/>
				))}
			</div>
		</Container>
	)
}
