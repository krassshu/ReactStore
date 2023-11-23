import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import classes from "./ProductDetails.module.css"
import { ProductContextProps, useProductContext } from "@/store/ProductContext"
import TableSkeleton from "@/components/UI/Skeletons/TableSkeleton"

export default function ProductDetails() {
	const { product, loading = true }: ProductContextProps = useProductContext()
	return (
		<div className={classes.details}>
			<h4>Technical Details</h4>

			{loading || !product ? (
				<TableSkeleton />
			) : (
				<>
					<TableContainer
						component={Paper}
						sx={{ border: "none" }}
					>
						<Table aria-label="Technical Details">
							<TableBody sx={{ border: "none" }}>
								{product?.technicalDetails.map((row, i) => (
									<TableRow
										key={i}
										sx={{
											"&:last-child td, &:last-child th": { border: 0 },
											"& td": { border: "none" },
										}}
									>
										<TableCell
											component="th"
											scope="row"
											sx={{ border: "none" }}
										>
											{row.key}
										</TableCell>
										<TableCell
											align="right"
											sx={{ textAlign: "left", border: "none" }}
										>
											{row.value}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</>
			)}
		</div>
	)
}
