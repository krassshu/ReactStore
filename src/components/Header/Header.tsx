"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import ReactDOM from "react-dom"

import classes from "./Header.module.css"
import logoImg from "@/assets/logo.png"
import Backdrop from "../UI/Backdrop/Backdrop"
import HeaderNav from "./HeaderNav/HeaderNav"
import HeaderTools from "./HeaderTools/HeaderTools"

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
				<HeaderTools setIsBackdropVisible={setIsBackdropVisible} />
			</div>
			{isBackdropVisible &&
				ReactDOM.createPortal(
					<Backdrop />,
					document.getElementById("react-portals")
				)}
		</header>
	)
}
