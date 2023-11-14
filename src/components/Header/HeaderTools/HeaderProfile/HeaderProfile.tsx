import Link from "next/link"
import classes from "./HeaderProfile.module.css"
import Image from "next/image"

import userIcon from "@/assets/icons/profile-circle.svg"
import bagIcon from "@/assets/icons/bag-2.svg"
import heartIcon from "@/assets/icons/heart-def.svg"
import dolarIcon from "@/assets/icons/dollar-circle.svg"
import logoutIcon from "@/assets/icons/logout.svg"

export default function HeaderProfile() {
	return (
		<div className={classes.wrapper}>
			<ul className={classes.options}>
				<li className={classes.option}>
					<Link href={"#"}>
						<Image
							src={userIcon}
							alt={"user icon"}
						/>
						<div className={classes.user}>
							<span className={classes["user-name"]}>Jimmy Smith</span>
							<span className={classes["user-mail"]}>
								Jimmy.smith1996@gmail.com
							</span>
						</div>
					</Link>
				</li>
				<li className={classes.option}>
					<Link href={"#"}>
						<Image
							src={bagIcon}
							alt={"bag icon"}
						/>
						<span className={classes.type}>Orders</span>
					</Link>
				</li>
				<li className={classes.option}>
					<Link href={"#"}>
						<Image
							src={heartIcon}
							alt={"heart icon"}
						/>
						<span className={classes.type}>Wish List</span>
					</Link>
				</li>
				<li className={classes.option}>
					<Link href={"#"}>
						<Image
							src={dolarIcon}
							alt={"dolar icon"}
						/>
						<span className={classes.type}>Payments</span>
					</Link>
				</li>
				<li className={classes.option}>
					<Link href={"#"}>
						<Image
							src={logoutIcon}
							alt={"logout icon"}
						/>
						<span className={classes.type}>Log out</span>
					</Link>
				</li>
			</ul>
		</div>
	)
}
