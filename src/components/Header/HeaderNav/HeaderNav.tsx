import classes from "./HeaderNav.module.css"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import HeaderProducts from "./HeaderProducts/HeaderProducts"

interface HeaderNavProps {
	setIsBackdropVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderNav({ setIsBackdropVisible }: HeaderNavProps) {
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
				>
					<Link
						href="/products"
						className={pathname.startsWith("/products") ? "active" : ""}
					>
						Products
					</Link>

					{isBackdropVisible && <HeaderProducts classes={"show"} />}
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
