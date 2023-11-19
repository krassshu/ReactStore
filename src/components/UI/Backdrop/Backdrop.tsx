import classes from "./Backdrop.module.css"
import { AnimatePresence, motion } from "framer-motion"

export default function Backdrop() {
	return (
		<AnimatePresence>
			<motion.div
				className={`${classes.backdrop}`}
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.64 }}
				exit={{ opacity: 0 }}
			></motion.div>
		</AnimatePresence>
	)
}
