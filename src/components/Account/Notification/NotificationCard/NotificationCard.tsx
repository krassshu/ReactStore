"use client"

import Image from "next/image"
import classes from "./NotificationCard.module.css"
import CustomSwitch from "@/components/UI/CustomElements/CustomSwitch"
import { useState } from "react"

export type NotificationCardT = {
	title: string
	description: string
	icon: any
}

const NotificationCard: React.FC<NotificationCardT> = ({
	title,
	description,
	icon,
}) => {
	const [isChecked, setIsChecked] = useState(false)

	const handleSwitch = () => {
		setIsChecked((prev) => !prev)
	}
	return (
		<div className={classes.card}>
			<div className={classes.desc}>
				<div className={classes.title}>
					<Image
						src={icon}
						alt={title}
					/>
					<span className={classes.titleInfo}>{title}</span>
				</div>
				<span className={classes.info}>{description}</span>
			</div>
			<div className={classes.switch}>
				<CustomSwitch
					checked={isChecked}
					onChange={handleSwitch}
				/>
			</div>
		</div>
	)
}

export default NotificationCard
