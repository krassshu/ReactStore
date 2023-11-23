import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"

export default function TableSkeleton() {
	return (
		<Stack
			spacing={1}
			sx={{ width: "100%" }}
		>
			<Skeleton
				variant="rounded"
				height={60}
			/>
			<Skeleton
				variant="rounded"
				height={60}
			/>
			<Skeleton
				variant="rounded"
				height={60}
			/>
			<Skeleton
				variant="rounded"
				height={60}
			/>
			<Skeleton
				variant="rounded"
				height={60}
			/>
			<Skeleton
				variant="rounded"
				height={60}
			/>
		</Stack>
	)
}
