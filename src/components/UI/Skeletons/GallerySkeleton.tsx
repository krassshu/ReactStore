import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"

export default function GallerySkeleton() {
	return (
		<Stack
			spacing={1}
			sx={{ width: "100%" }}
		>
			<Skeleton
				variant="rounded"
				sx={{ width: "100%", height: "280px" }}
			/>
			<Box sx={{ display: "flex", justifyContent: "center", gap: "24px" }}>
				<Skeleton
					variant="rounded"
					sx={{ width: "30%", height: "100px" }}
				/>
				<Skeleton
					variant="rounded"
					sx={{ width: "30%", height: "100px" }}
				/>
				<Skeleton
					variant="rounded"
					sx={{ width: "30%", height: "100px" }}
				/>
			</Box>
		</Stack>
	)
}
