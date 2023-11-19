import { HeaderBackgropProps } from "@/components/Header/HeaderNav/HeaderNav"
import classes from "./FullBackdrop.module.css"
import { AnimatePresence, motion } from "framer-motion"

import React, { ReactNode } from "react"
interface ContainerProps {
	children: ReactNode
	setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const FullBackdrop: React.FC<ContainerProps> = ({ children, setOpenLogin }) => {
	return (
		<AnimatePresence>
			<motion.div
				className={`${classes.backdrop}`}
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.64 }}
				exit={{ opacity: 0 }}
				onClick={() => setOpenLogin(false)}
			></motion.div>
			{children}
		</AnimatePresence>
	)
}

export default FullBackdrop
