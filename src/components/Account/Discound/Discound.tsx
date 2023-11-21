import classes from "./Discount.module.css"
import Container from "@/components/UI/Container/Container"
import Head from "../Head/Head"

export default function Discount() {
	return (
		<Container>
			<Head
				title={"Discounts & Voucher"}
				desc={"Add discount code to apply a discount in your purchase"}
			/>
			<div className={classes.wrapper}>
				<input
					type="text"
					placeholder={"Paste your discount code here"}
					className={classes.input}
				/>
			</div>
		</Container>
	)
}
