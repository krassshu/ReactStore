import Image from "next/image"
import Head from "@/components/Account/Head/Head"

import classes from "./PersonalData.module.css"
import editIcon from "@/assets/icons/edit.svg"
import userIcon from "@/assets/icons/user.svg"
import directIcon from "@/assets/icons/direct.svg"
import phoneIcon from "@/assets/icons/call.svg"
import keyIcon from "@/assets/icons/key.svg"
import homeIcon from "@/assets/icons/home-2.svg"
import signpostIcon from "@/assets/icons/signpost.svg"
import Container from "@/components/UI/Container/Container"
import AccountInput, {
	AccountInputProps,
} from "@/components/Account/AccountInput/AccountInput"

const inputsData: AccountInputProps[] = [
	{
		imageProps: { src: userIcon, alt: "user icon" },
		inputProps: { type: "text", id: "fullName", placeholder: "" },
		title: "Full name",
	},
	{
		imageProps: { src: directIcon, alt: "direct icon" },
		inputProps: { type: "email", id: "email", placeholder: "" },
		title: "E-mail Address",
	},
	{
		imageProps: { src: phoneIcon, alt: "phone icon" },
		inputProps: { type: "tel", id: "phone", placeholder: "" },
		title: "Phone number",
	},
	{
		imageProps: { src: keyIcon, alt: "key icon" },
		inputProps: { type: "password", id: "password", placeholder: "" },
		title: "Password",
	},
	{
		imageProps: { src: homeIcon, alt: "home icon" },
		inputProps: { type: "text", id: "address", placeholder: "" },
		title: "Address",
	},
	{
		imageProps: { src: signpostIcon, alt: "sign post icon" },
		inputProps: { type: "text", id: "postal", placeholder: "" },
		title: "Postal code",
	},
]

export default function PersonalData() {
	return (
		<Container>
			<Head
				title={"Identification"}
				desc={"Verify your identity"}
			/>
			<div className={classes.wrapper}>
				{inputsData.map((input, i) => (
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
