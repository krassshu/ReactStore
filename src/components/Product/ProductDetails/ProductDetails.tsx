import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import classes from "./ProductDetails.module.css"

function createData(name: string, data: string) {
	return { name, data }
}

const rows = [
	createData(
		"Display",
		"13.3-inch (diagonal) LED-backlit display with IPS technology"
	),
	createData("Graphics", "Apple 10-core GPU"),
	createData("Processor", "Apple M2 chip"),
	createData("In the box", "67W USB-C Power Adapter, USB-C Charge Cable (2 m)"),
	createData("Height", "0.61 inch (1.56 cm)"),
	createData("Width", "11.97 inches (30.41 cm)"),
]

export default function ProductDetails() {
	return (
		<div className={classes.details}>
			<h4>Technical Details</h4>
			<TableContainer
				component={Paper}
				sx={{ border: "none" }}
			>
				<Table aria-label="Technical Details">
					<TableBody sx={{ border: "none" }}>
						{rows.map((row) => (
							<TableRow
								key={row.name}
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
									{row.name}
								</TableCell>
								<TableCell
									align="right"
									sx={{ textAlign: "left", border: "none" }}
								>
									{row.data}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}
