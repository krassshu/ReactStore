import classes from "./HeaderNav.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import HeaderProducts from "./HeaderProducts/HeaderProducts"

import { AnimatePresence, motion } from "framer-motion"
export interface HeaderBackgropProps {
	setIsBackdropVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderNav({
	setIsBackdropVisible,
}: HeaderBackgropProps) {
	const [isBackdropVisible, setIsBackdropVisibleLocal] = useState(false)
	const pathname = usePathname()

	const handleMouseOver = () => {
		setIsBackdropVisibleLocal(true)
		setIsBackdropVisible(true)
	}

	const handleMouseOut = () => {
		setIsBackdropVisibleLocal(false)
		setIsBackdropVisible(false)
	}

	return (
		<nav className={classes.nav}>
			<ul className={classes["nav-items"]}>
				<li className={classes["nav-item"]}>
					<Link
						href="/"
						className={pathname === "/" ? "active" : ""}
					>
						Home
					</Link>
				</li>
				<li
					className={classes["nav-item"]}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					onClick={handleMouseOut}
				>
					<Link
						href="/c"
						className={pathname.startsWith("/c") ? "active" : ""}
					>
						Products
					</Link>
					<AnimatePresence>
						{isBackdropVisible && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<HeaderProducts classes={"show"} />
							</motion.div>
						)}
					</AnimatePresence>
				</li>
				<li className={classes["nav-item"]}>
					<p>Blog</p>
				</li>
				<li className={classes["nav-item"]}>
					<Link
						href="/FAQ"
						className={pathname == "/FAQ" ? "active" : ""}
					>
						FAQ
					</Link>
				</li>
				<li className={classes["nav-item"]}>
					<p>Contact Us</p>
				</li>
			</ul>
		</nav>
	)
}
