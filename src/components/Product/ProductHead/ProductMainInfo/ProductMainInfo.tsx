import Image from "next/image"
import classes from "./ProductMainInfo.module.css"
import shopSvg from "@/assets/icons/shop.svg"
import verifySvg from "@/assets/icons/verify.svg"
import truckSvg from "@/assets/icons/truck.svg"
import MoreProductInfo from "./MoreProductInfo/MoreProductInfo"
import RatingStarBlue from "@/components/UI/RatingStarBlue/RatingStarBlue"
import { ProductContextProps, useProductContext } from "@/store/ProductContext"
import TextSkeleton from "@/components/UI/Skeletons/TextSkeleton"
import { countRating } from "@/components/Util/rating"
import { calcLength } from "framer-motion"

export default function ProductMainInfo() {
	const { product, loading = true }: ProductContextProps = useProductContext()

	let rating
	if (!loading && product) {
		const getRating = product.rating
		rating = countRating(getRating!.like, getRating!.dislike)
	}

	return (
		<div className={classes.wrapper}>
			{loading || !product ? (
				<TextSkeleton />
			) : (
				<>
					<div className={classes.head}>
						<h1 className={classes.title}>{product?.productName}</h1>
						<div className={classes.rating}>
							<RatingStarBlue rating={rating || 0} />
							{" | "}
							<span className={classes.sold}>sold {product!.sold || 0}</span>
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
							{product!.colors.map((color) => (
								<button
									key={color.name}
									style={{ background: color.hexCode }}
									className={classes.circle}
									title={color.name}
								></button>
							))}
						</div>
					</div>
					<MoreProductInfo techDetails={product!.technicalDetails} />
				</>
			)}
		</div>
	)
}
