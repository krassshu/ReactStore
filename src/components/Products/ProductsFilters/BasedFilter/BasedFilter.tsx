"use client"

import Image from "next/image"
import classes from "./BasedFilter.module.css"
import arrowImg from "@/assets/icons/arrow-down.svg"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useRerenderContext } from "@/store/RerenderContext"

export default function BasedFilter({
	filtrName,
	data,
}: {
	filtrName: string
	data: ProductData[]
}) {
	const pathname = usePathname()
	const [checkedValues, setCheckedValues] = useState<string[]>([])

	const { forceUpdate } = useRerenderContext()

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search)
		const values = queryParams.getAll(filtrName)
		setCheckedValues(values)
	}, [pathname])

	const handleCheckboxChange = (itemName: string) => {
		const queryParams = new URLSearchParams(window.location.search)
		const currentValues = queryParams.getAll(filtrName)

		if (currentValues.includes(itemName)) {
			const updatedValues = currentValues.filter((value) => value !== itemName)
			if (updatedValues.length > 0) {
				queryParams.set(filtrName, updatedValues.join(","))
			} else {
				queryParams.delete(filtrName)
			}
		} else {
			queryParams.append(filtrName, itemName)
		}

		const newSearch = queryParams.toString()
		const newUrl = `${pathname}?${newSearch}`
		history.pushState({}, "", newUrl)
		forceUpdate()
		setCheckedValues(queryParams.getAll(filtrName))
	}

	return (
		<>
			<div className={classes.acord}>
				<Accordion sx={{ boxShadow: "none" }}>
					<AccordionSummary
						sx={{ padding: 0 }}
						expandIcon={
							<Image
								src={arrowImg}
								alt={"arrow"}
							/>
						}
					>
						<div className={classes.head}>
							<span>{filtrName}</span>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<div className={classes.brands}>
							{data &&
								data.map((item: ProductData, i: number) => (
									<label
										key={i}
										htmlFor={item.name}
										className={classes.label}
									>
										<input
											type="checkbox"
											id={item.name}
											checked={checkedValues.includes(item.name)}
											onChange={() => handleCheckboxChange(item.name)}
										/>
										<div className={classes.desc}>
											<span>{item.name}</span>
											<p className={classes.quantity}>({item.amount})</p>
										</div>
									</label>
								))}
						</div>
					</AccordionDetails>
				</Accordion>
			</div>
		</>
	)
}
