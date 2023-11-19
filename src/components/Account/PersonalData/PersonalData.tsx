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

export default function PersonalData() {
	return (
		<Container>
			<Head
				title={"Identification"}
				desc={"Verify your identity"}
			/>
			<div className={classes.wrapper}>
				<label
					htmlFor="fullName"
					className={classes.inputLabel}
				>
					<span className={classes.label}>Full name</span>
					<div className={classes.inputCon}>
						<Image
							src={userIcon}
							alt={"user icon"}
						/>
						<input
							type="text"
							id={"fullName"}
							placeholder={""}
						/>
						<button className={classes.editBtn}>
							<Image
								src={editIcon}
								alt={"edit icon"}
							/>
						</button>
					</div>
				</label>
				<label
					htmlFor="email"
					className={classes.inputLabel}
				>
					<span className={classes.label}>E-mail Address</span>
					<div className={classes.inputCon}>
						<Image
							src={directIcon}
							alt={"direct icon"}
						/>
						<input
							type="teemailxt"
							id={"email"}
							placeholder={""}
						/>
						<button className={classes.editBtn}>
							<Image
								src={editIcon}
								alt={"edit icon"}
							/>
						</button>
					</div>
				</label>
				<label
					htmlFor="phone"
					className={classes.inputLabel}
				>
					<span className={classes.label}>Phone number</span>
					<div className={classes.inputCon}>
						<Image
							src={phoneIcon}
							alt={"phone icon"}
						/>
						<input
							type="tel"
							id={"phone"}
							placeholder={""}
						/>
						<button className={classes.editBtn}>
							<Image
								src={editIcon}
								alt={"edit icon"}
							/>
						</button>
					</div>
				</label>
				<label
					htmlFor="password"
					className={classes.inputLabel}
				>
					<span className={classes.label}>Password</span>
					<div className={classes.inputCon}>
						<Image
							src={keyIcon}
							alt={"key icon"}
						/>
						<input
							type="password"
							id={"password"}
							placeholder={""}
						/>
						<button className={classes.editBtn}>
							<Image
								src={editIcon}
								alt={"edit icon"}
							/>
						</button>
					</div>
				</label>
				<label
					htmlFor="address"
					className={classes.inputLabel}
				>
					<span className={classes.label}>Address</span>
					<div className={classes.inputCon}>
						<Image
							src={homeIcon}
							alt={"home icon"}
						/>
						<input
							type="text"
							id={"address"}
							placeholder={""}
						/>
						<button className={classes.editBtn}>
							<Image
								src={editIcon}
								alt={"edit icon"}
							/>
						</button>
					</div>
				</label>
				<label
					htmlFor="postal"
					className={classes.inputLabel}
				>
					<span className={classes.label}>Postal code</span>
					<div className={classes.inputCon}>
						<Image
							src={signpostIcon}
							alt={"sign post icon"}
						/>
						<input
							type="text"
							id={"postal"}
							placeholder={""}
						/>
						<button className={classes.editBtn}>
							<Image
								src={editIcon}
								alt={"edit icon"}
							/>
						</button>
					</div>
				</label>
			</div>
		</Container>
	)
}
