"use client"

import classes from "./AsideNav.module.css"
import userCricleIcon from "@/assets/icons/profile-circle-gray.svg"
import userEditIcon from "@/assets/icons/user-edit.svg"
import oredersIcon from "@/assets/icons/bag.svg"
import wishListIcon from "@/assets/icons/heart-def.svg"
import discoundIcon from "@/assets/icons/gift.svg"
import securityIcon from "@/assets/icons/security-safe.svg"
import notificationIcon from "@/assets/icons/notification.svg"
import contactIcon from "@/assets/icons/24-support.svg"
import logoutIcon from "@/assets/icons/logout.svg"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function AsideNav() {
	const pathName = usePathname()

	return (
		<aside className={classes.accNav}>
			<div className={classes.user}>
				<Image
					src={userCricleIcon}
					alt={"user icon"}
				/>
				<span className={classes.userName}>Jimmy Smith</span>
			</div>
			<ul className={classes.elements}>
				<li
					className={`${classes.element} ${
						pathName == "/account/personal-data" ? classes.active : ""
					}`}
				>
					<Link href={"/account/personal-data"}>
						<Image
							src={userEditIcon}
							alt={""}
						/>
						Personal Data
					</Link>
				</li>
				<li
					className={`${classes.element} ${
						pathName == "/account/orders" ? classes.active : ""
					}`}
				>
					<Link href={"/account/orders"}>
						<Image
							src={oredersIcon}
							alt={""}
						/>
						Orders
					</Link>
				</li>
				<li
					className={`${classes.element} ${
						pathName == "/account/wish-list" ? classes.active : ""
					}`}
				>
					<Link href={"/account/wish-list"}>
						<Image
							src={wishListIcon}
							alt={""}
						/>
						Wish List
					</Link>
				</li>
				<li
					className={`${classes.element} ${
						pathName == "/account/discound" ? classes.active : ""
					}`}
				>
					<Link href={"/account/discound"}>
						<Image
							src={discoundIcon}
							alt={""}
						/>
						Discound
					</Link>
				</li>
				<li
					className={`${classes.element} ${
						pathName == "/account/security-access" ? classes.active : ""
					}`}
				>
					<Link href={"/account/security-access"}>
						<Image
							src={securityIcon}
							alt={""}
						/>
						Security & Access
					</Link>
				</li>
				<li
					className={`${classes.element} ${
						pathName == "/account/notification" ? classes.active : ""
					}`}
				>
					<Link href={"/account/notification"}>
						<Image
							src={notificationIcon}
							alt={""}
						/>
						Notification
					</Link>
				</li>
				<li className={`${classes.element}`}>
					<Link href={"/contact"}>
						<Image
							src={contactIcon}
							alt={""}
						/>
						Contact us
					</Link>
				</li>
				<li
					className={`${classes.element} ${classes.logout}`}
					tabIndex={0}
				>
					<Image
						src={logoutIcon}
						alt={""}
					/>
					Log out
				</li>
			</ul>
		</aside>
	)
}
