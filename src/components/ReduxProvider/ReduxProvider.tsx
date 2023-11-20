"use client"

import store from "@/redux/store"
import { Provider } from "react-redux"
import { ChildrenI } from "../UI/Container/Container"

const ReduxProvider: React.FC<ChildrenI> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
