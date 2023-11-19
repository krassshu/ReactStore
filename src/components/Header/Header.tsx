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
import { AnimatePresence, motion } from "framer-motion"

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
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<Backdrop />
					</motion.div>,
					document.getElementById("react-portals")
				)}
		</header>
	)
}
