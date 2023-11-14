import Image from "next/image"
import classes from "./BagItem.module.css"

import deliveryIcon from "@/assets/icons/truck.svg"
import trashIcon from "@/assets/icons/trash.svg"

export default function BagItem() {
	return (
		<div className={classes.item}>
			<Image
				width={160}
				height={120}
				src={"/#"}
				alt={""}
			/>
			<div className={classes.data}>
				<span className={classes["product-name"]}>
					MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
				</span>
				<span className={classes.color}>Black</span>
				<div className={classes.services}>
					<div className={classes.service}>
						<Image
							src={deliveryIcon}
							alt={"delivery icon"}
						/>
						<span>Free Delivery</span>
					</div>
					<div className={classes.service}>
						<Image
							src={deliveryIcon}
							alt={"delivery icon"}
						/>
						<span>Free Delivery</span>
					</div>
				</div>
				<div className={classes.sum}>
					<span className={classes.price}>$433.00</span>
					<div className={classes.count}>
						<button className={classes.trash}>
							<Image
								src={trashIcon}
								alt={"trash icon"}
							/>
						</button>
						<div className={classes.counter}>
							<button>-</button>
							<span className={classes.amount}>1</span>
							<button>+</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
