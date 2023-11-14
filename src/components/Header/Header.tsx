"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import ReactDOM from "react-dom"

import classes from "./Header.module.css"
import logoImg from "@/assets/logo.png"
import Backdrop from "../UI/Backdrop/Backdrop"
import HeaderNav from "./HeaderNav/HeaderNav"

export default function Header() {
	const [isBackdropVisible, setIsBackdropVisible] = useState(false)

	return (
		<header className={classes.header}>
			<div className={classes.container + " spacer"}>
				<Link
					className={classes.logo}
					href="/"
				>
					<Image
						src={logoImg}
						alt="Tech logo"
					/>
				</Link>
				<HeaderNav setIsBackdropVisible={setIsBackdropVisible} />
				<ul className={classes["header-tools"]}>
					<li className={classes["header-tool"]}>
						<button className={classes.search}></button>
					</li>
					<li className={classes["header-tool"]}>
						<button className={classes.basket}></button>
					</li>
					<li className={classes["header-tool"]}>
						<button className={classes.user}></button>
					</li>
				</ul>
			</div>
			{isBackdropVisible &&
				ReactDOM.createPortal(
					<Backdrop />,
					document.getElementById("react-portals")
				)}
		</header>
	)
}
