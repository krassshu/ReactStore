import { useState } from "react"
import { HeaderBackgropProps } from "../HeaderNav/HeaderNav"
import classes from "./HeaderTools.module.css"
import HeaderProfile from "./HeaderProfile/HeaderProfile"
import HeaderBag from "./HeaderBag/HeaderBag"

import { AnimatePresence, motion } from "framer-motion"
import Badge from "@mui/material/Badge"

export default function HeaderTools({
	setIsBackdropVisible,
}: HeaderBackgropProps) {
	const [openTool, setOpenTool] = useState([false, false])

	const handleMouseOver = (index: number) => {
		setIsBackdropVisible(true)
		setOpenTool((prevOpenTool) => {
			const newOpenTool = [...prevOpenTool]
			newOpenTool[index] = true
			return newOpenTool
		})
	}

	const handleMouseOut = () => {
		setIsBackdropVisible(false)
		setOpenTool([false, false])
	}

	return (
		<ul className={classes["header-tools"]}>
			<li className={classes["header-tool"]}>
				<button className={`${classes.button} ${classes.search}`}></button>
			</li>
			<li
				className={classes["header-tool"]}
				onMouseOver={() => handleMouseOver(0)}
				onMouseOut={handleMouseOut}
			>
				<Badge
					badgeContent={10}
					color="primary"
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					max={9}
				>
					<button className={`${classes.button} ${classes.basket}`}></button>
				</Badge>
				<AnimatePresence>
					{openTool[0] && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<HeaderBag />
						</motion.div>
					)}
				</AnimatePresence>
			</li>
			<li
				className={classes["header-tool"]}
				onMouseOver={() => handleMouseOver(1)}
				onMouseOut={handleMouseOut}
			>
				<button className={`${classes.button} ${classes.user}`}></button>
				<AnimatePresence>
					{openTool[1] && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<HeaderProfile />
						</motion.div>
					)}
				</AnimatePresence>
			</li>
		</ul>
	)
}
