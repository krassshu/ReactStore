import { useContext, useEffect, useState } from "react"
import { HeaderBackgropProps } from "../HeaderNav/HeaderNav"
import classes from "./HeaderTools.module.css"
import HeaderProfile from "./HeaderProfile/HeaderProfile"
import HeaderBag from "./HeaderBag/HeaderBag"
import { AnimatePresence, motion } from "framer-motion"
import Badge from "@mui/material/Badge"
import ReactDOM from "react-dom"
import AccessModal from "@/components/AccessModal/AccessModal"
import FullBackdrop from "@/components/UI/FullBackdrop/FullBackdrop"
import { useSelector } from "react-redux"

export default function HeaderTools({
	setIsBackdropVisible,
}: HeaderBackgropProps) {
	const [openTool, setOpenTool] = useState([false, false])
	const [isLogin, setIsLogin] = useState(true)
	const [openLogin, setOpenLogin] = useState(false)

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

	const onOpenLogin = () => {
		setOpenLogin(!openLogin)
	}
	const cartItems = useSelector((state: any) => state.cart.items)
	return (
		<>
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
						badgeContent={cartItems.length}
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

				{isLogin ? (
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
				) : (
					<button
						className={classes.loginBtn}
						onClick={onOpenLogin}
					>
						Login / Sign Up
					</button>
				)}
			</ul>
			{openLogin &&
				ReactDOM.createPortal(
					<FullBackdrop setOpenLogin={setOpenLogin}>
						<AccessModal />
					</FullBackdrop>,
					document.getElementById("react-portals") ?? document.body
				)}
		</>
	)
}
