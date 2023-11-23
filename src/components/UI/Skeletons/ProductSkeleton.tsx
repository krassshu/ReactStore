import * as React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Skeleton from "@mui/material/Skeleton"

export default function ProductSkeleton() {
	return (
		<Grid
			container
			justifyContent="space-between"
			wrap="wrap"
		>
			{Array.from(new Array(4)).map((item, index) => (
				<Box
					key={index}
					sx={{ width: 280, marginRight: 0.5, my: 5 }}
				>
					<Skeleton
						variant="rectangular"
						height={190}
					/>
					<Box sx={{ pt: 0.5 }}>
						<Skeleton
							width="60%"
							height="30px"
						/>
						<Skeleton height="40px" />
					</Box>
				</Box>
			))}
		</Grid>
	)
}
