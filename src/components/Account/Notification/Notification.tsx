import Container from "@/components/UI/Container/Container"
import classes from "./Notification.module.css"
import Head from "../Head/Head"

export default function Notification() {
	return (
		<Container>
			<Head
				title={"Order History"}
				desc={"Track, return or purchase items"}
			/>
		</Container>
	)
}
