import { useState } from "react"
import { HeaderBackgropProps } from "../HeaderNav/HeaderNav"
import classes from "./HeaderTools.module.css"
import HeaderProfile from "./HeaderProfile/HeaderProfile"
import HeaderBag from "./HeaderBag/HeaderBag"

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
				<button className={`${classes.button} ${classes.basket}`}></button>
				{openTool[0] && <HeaderBag />}
			</li>
			<li
				className={classes["header-tool"]}
				onMouseOver={() => handleMouseOver(1)}
				onMouseOut={handleMouseOut}
			>
				<button className={`${classes.button} ${classes.user}`}></button>
				{openTool[1] && <HeaderProfile />}
			</li>
		</ul>
	)
}
