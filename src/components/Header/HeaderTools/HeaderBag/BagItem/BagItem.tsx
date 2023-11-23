import Image from "next/image"
import classes from "./BagItem.module.css"

import deliveryIcon from "@/assets/icons/truck.svg"
import trashIcon from "@/assets/icons/trash.svg"
import { NumericFormat } from "react-number-format"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart, removeOneFromCart } from "@/redux/cartSlice"

export default function BagItem({
	id,
	productName,
	price,
	imagePath,
	colors,
	count,
}: ProductToBag & { count: number }) {
	const dispatch = useDispatch()

	const productDetails = { id, productName, price, imagePath, colors }
	const handleAddMore = () => {
		dispatch(addToCart(productDetails))
	}

	const handleRemoveItem = () => {
		dispatch(removeFromCart(productDetails))
	}

	const handleRemoveOne = () => {
		dispatch(removeOneFromCart(productDetails))
	}

	return (
		<div className={classes.item}>
			<Link href={`/products/${id}`}>
				<Image
					width={160}
					height={120}
					src={imagePath}
					alt={productName}
					style={{ objectFit: "contain" }}
				/>
			</Link>
			<div className={classes.data}>
				<Link href={`/products/${id}`}>
					<span className={classes["product-name"]}>{productName}</span>
				</Link>
				<span className={classes.color}>{colors.name}</span>
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
					<span className={classes.price}>
						<NumericFormat
							value={count * parseInt(price?.toFixed(2)) || 0}
							displayType={"text"}
							thousandSeparator={true}
							prefix={"$"}
						/>
					</span>
					<div className={classes.count}>
						<button
							className={classes.trash}
							onClick={handleRemoveItem}
						>
							<Image
								src={trashIcon}
								alt={"trash icon"}
							/>
						</button>
						<div className={classes.counter}>
							<button onClick={handleRemoveOne}>-</button>
							<span className={classes.amount}>{count}</span>
							<button onClick={handleAddMore}>+</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
