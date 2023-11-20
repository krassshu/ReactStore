import React, { ReactNode } from "react"
import classes from "./Container.module.css"

export interface ChildrenI {
	children: ReactNode
}

const Container: React.FC<ChildrenI> = ({ children }) => {
	return <div className={classes.container}>{children}</div>
}

export default Container
