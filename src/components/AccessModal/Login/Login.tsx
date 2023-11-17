import Image from "next/image"
import classes from "./Login.module.css"
import { useForm, SubmitHandler } from "react-hook-form"

import facebookIcon from "@/assets/icons/_Facebook.svg"
import googleIcon from "@/assets/icons/google.svg"

export default function Login() {
	const { register, handleSubmit } = useForm<Login>()

	const onSubmit: SubmitHandler<Login> = (data) => {
		const formData = new FormData()

		formData.append("email", data.email)
		formData.append("password", data.password)
		formData.append("keepLogin", String(data.keepLogin))

		console.log(data)
	}

	return (
		<div className={classes.login}>
			<span className={classes.head}>Log in to Tech Heim</span>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={classes.formField}
			>
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
						{...register("keepLogin")}
					/>
					<label
						htmlFor="keepLogin"
						className={classes.checkbox}
					>
						Keep me logged in
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
