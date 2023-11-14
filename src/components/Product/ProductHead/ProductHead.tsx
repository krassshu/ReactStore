import ProductGallery from "./ProductGallery/ProductGallery"
import ProductMainInfo from "./ProductMainInfo/ProductMainInfo"
import classes from "./ProductHead.module.css"
import ProductInstallment from "./ProductInstallment/ProductInstallment"

export default function ProductHead() {
	return (
		<div className={classes["main-content"]}>
			<ProductGallery items={[]} />
			<ProductMainInfo />
			<ProductInstallment />
		</div>
	)
}
