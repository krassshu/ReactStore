import classes from "./Register.module.css"
import Image from "next/image"
import { useForm, SubmitHandler } from "react-hook-form"

import facebookIcon from "@/assets/icons/_Facebook.svg"
import googleIcon from "@/assets/icons/google.svg"
import Link from "next/link"
import axios from "axios"

interface LoginProps {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
	setIsError: React.Dispatch<React.SetStateAction<boolean>>
	setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Register({
	setIsLoading,
	setIsError,
	setIsSuccess,
}: LoginProps) {
	const { register, handleSubmit } = useForm<Register>()

	const onSubmit: SubmitHandler<Register> = async (data) => {
		const formData = new FormData()

		formData.append("fullname", data.fullName)
		formData.append("email", data.email)
		formData.append("password", data.password)
		formData.append("keepLogin", String(data.policy))

		console.log(data)

		try {
			setIsLoading(true)

			const response = await axios.post("/api/register", data)
			console.log(response)
			setIsLoading(false)
			setIsSuccess(true)
		} catch (error: any) {
			setIsLoading(false)
			setIsError(true)
			console.error(error)
		}
	}

	return (
		<div className={classes.login}>
			<span className={classes.head}>Create your account</span>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={classes.formField}
			>
				<label htmlFor="fullname">
					<input
						type="fullname"
						id="fullname"
						{...register("fullName", { required: true })}
						placeholder={"Full Name"}
						className={classes.input}
					/>
				</label>
				<label htmlFor="email">
					<input
						type="email"
						id="email"
						{...register("email", { required: true })}
						placeholder={"E-mail"}
						className={classes.input}
					/>
				</label>
				<label htmlFor="password">
					<input
						type="password"
						id="password"
						{...register("password", { required: true })}
						placeholder={"Password"}
						className={classes.input}
					/>
				</label>

				<div className={classes["checkbox-con"]}>
					<input
						type="checkbox"
						id="keepLogin"
						{...register("policy")}
					/>
					<label
						htmlFor="keepLogin"
						className={classes.checkbox}
					>
						I agree to all{" "}
						<Link
							href={"#"}
							target={"_blank"}
						>
							Terms & Conditions
						</Link>
					</label>
				</div>

				<input
					type="submit"
					value="Log In"
					className={classes["login-btn"]}
				/>
			</form>
			<span className={classes.spacer}>Or Log In with</span>

			<div className={classes.buttons}>
				<button className={`${classes.button}`}>
					<Image
						src={googleIcon}
						alt={"google icon"}
					/>
					Google
				</button>
				<button className={`${classes.button}`}>
					<Image
						src={facebookIcon}
						alt={"facebook icon"}
					/>
					Facebook
				</button>
			</div>
		</div>
	)
}
