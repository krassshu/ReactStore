import Image from "next/image"
import classes from "./ProductMainInfo.module.css"
import shopSvg from "@/assets/icons/shop.svg"
import verifySvg from "@/assets/icons/verify.svg"
import truckSvg from "@/assets/icons/truck.svg"
import MoreProductInfo from "./MoreProductInfo/MoreProductInfo"
import RatingStarBlue from "@/components/UI/RatingStarBlue/RatingStarBlue"

export default function ProductMainInfo() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.head}>
				<h1 className={classes.title}>
					MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
				</h1>
				<div className={classes.rating}>
					<RatingStarBlue rating={4.9} />
					{" | "}
					<span className={classes.sold}>sold 123</span>
				</div>
			</div>
			<div className={classes.meta}>
				<span>
					<Image
						src={shopSvg}
						alt={"shop icon"}
					/>
					In Stock
				</span>
				<span>
					<Image
						src={verifySvg}
						alt={"verify icon"}
					/>
					In Stock
				</span>
				<span>
					<Image
						src={truckSvg}
						alt={"truck icon"}
					/>
					In Stock
				</span>
			</div>
			<div className={classes["select-color"]}>
				<span>Select color</span>
				<div className={classes.circleCon}>
					<button className={classes.circle}></button>
				</div>
			</div>
			<MoreProductInfo />
		</div>
	)
}
