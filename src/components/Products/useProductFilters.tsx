"use client"
import { useEffect, useState } from "react"
import { ProductContextProps, useProductContext } from "@/store/ProductContext"
export function useProductFilters(
	filterFields: string[]
): FiltersData[] | null {
	const { product, loading = true }: ProductContextProps = useProductContext()
	const [filters, setFilters] = useState<FiltersData[] | null>(null)

	useEffect(() => {
		if (!loading && product) {
			const filtersMap = filterFields.reduce((accumulator, field) => {
				const fieldMap = product.reduce(
					(fieldAccumulator: Map<string, number>, currentProduct: any) => {
						let fieldValues: string[] | undefined

						if (Array.isArray(currentProduct[field])) {
							fieldValues = currentProduct[field].map(
								(colorObj: any) => colorObj.name || "Unknown"
							)
						} else {
							fieldValues = [currentProduct[field] || "Unknown"]
						}

						if (fieldValues) {
							fieldValues.forEach((fieldValue) => {
								if (fieldAccumulator.has(fieldValue)) {
									fieldAccumulator.set(
										fieldValue,
										fieldAccumulator.get(fieldValue)! + 1
									)
								} else {
									fieldAccumulator.set(fieldValue, 1)
								}
							})
						}

						return fieldAccumulator
					},
					new Map<string, number>()
				)

				const fieldData: FiltersData = {
					filtrName: field,
					data: Array.from(
						fieldMap.entries() as Iterable<[string, number]>
					).map(([value, amount]) => ({
						name: value,
						amount,
					})),
				}

				accumulator.push(fieldData)
				return accumulator
			}, [] as FiltersData[])

			setFilters(filtersMap)
		}
	}, [loading, product])

	return filters
}
