"use client"

import { useSearchParams } from "next/navigation"
import { createContext, useContext, ReactNode, useState } from "react"

interface RerenderContextProps {
	children: ReactNode
}

interface RerenderContextValue {
	forceUpdate: () => void
}

const RerenderContext = createContext<RerenderContextValue | undefined>(
	undefined
)

export const RerenderProvider: React.FC<RerenderContextProps> = ({
	children,
}) => {
	const [update, setUpdate] = useState(0)
	const params = useSearchParams()
	console.log(params.getAll("brand"))
	const forceUpdate = () => {
		setUpdate((prev) => prev + 1)
	}

	const contextValue: RerenderContextValue = {
		forceUpdate,
	}

	return (
		<RerenderContext.Provider value={contextValue}>
			{children}
		</RerenderContext.Provider>
	)
}

export const useRerenderContext = () => {
	const context = useContext(RerenderContext)
	if (!context) {
		throw new Error("useRerenderContext must be used within a RerenderProvider")
	}

	return context
}
