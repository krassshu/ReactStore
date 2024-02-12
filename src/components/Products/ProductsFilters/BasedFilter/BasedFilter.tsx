"use client"

import Image from "next/image"
import classes from "./BasedFilter.module.css"
import arrowImg from "@/assets/icons/arrow-down.svg"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails"
import { BrandCount } from "../ProductsFilters"
import { useEffect, useState } from "react"
import { getFilteredProducts } from "@/app/c/[products]/page"

export default function BasedFilter({ brands }: { brands: BrandCount[] }) {
	const [checkedValues, setCheckedValues] = useState<string[]>([])

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search)
		const values = queryParams.getAll("brand")
		setCheckedValues(values)
	}, [])

	const handleBrandChange = async (brand: string) => {
		const queryParams = new URLSearchParams(window.location.search)
		const currentValues = queryParams.getAll("brand")

		if (currentValues.includes(brand)) {
			const updatedValues = currentValues.filter((value) => value !== brand)
			setCheckedValues(updatedValues)
			if (updatedValues.length > 0) {
				queryParams.set("brand", updatedValues.join(","))
			} else {
				queryParams.delete("brand")
			}

			const filteredProducts = await getFilteredProducts(
				updatedValues.join(",")
			)
		} else {
			const updatedValues = checkedValues.includes(brand)
				? checkedValues.filter((value) => value !== brand)
				: [...checkedValues, brand]
			queryParams.append("brand", brand)
			const filteredProducts = await getFilteredProducts(
				updatedValues.join(",")
			)
		}
		const newSearch = queryParams.toString()
		const newUrl = `${window.location.pathname}?${newSearch}`
		window.history.pushState({}, "", newUrl)
		setCheckedValues(queryParams.getAll("brand"))
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
							<span>Brands</span>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<div className={classes.brands}>
							{brands.map((item: BrandCount, i: number) => (
								<label
									key={i}
									htmlFor={item.brand}
									className={classes.label}
								>
									<input
										type="checkbox"
										id={item.brand}
										checked={checkedValues.includes(item.brand)}
										onChange={() => handleBrandChange(item.brand)}
									/>
									<div className={classes.desc}>
										<span>{item.brand}</span>
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
