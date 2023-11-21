import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

export default function TextSkeleton() {
	return (
		<Stack
			spacing={1}
			sx={{ width: "100%" }}
		>
			<Skeleton
				variant="rounded"
				sx={{ width: "100%", height: "80px" }}
			/>
			<Skeleton
				variant="rounded"
				sx={{ width: "100%", height: "20px" }}
			/>

			<Skeleton
				variant="rounded"
				sx={{ width: "100%", height: "40px" }}
			/>
			<Skeleton
				variant="rounded"
				sx={{ width: "40%", height: "20px" }}
			/>
			<Skeleton
				variant="rounded"
				sx={{ width: "50%", height: "20px" }}
			/>
			<Skeleton
				variant="rounded"
				sx={{ width: "60%", height: "20px" }}
			/>
			<Skeleton
				variant="rounded"
				sx={{ width: "60%", height: "20px" }}
			/>
		</Stack>
	)
}
