import Breadcrumb from "../UI/Breadcrumb/Breadcrumb"
import classes from "./Product.module.css"
import ProductComments from "./ProductComments/ProductComments"
import ProductDetails from "./ProductDetails/ProductDetails"
import ProductHead from "./ProductHead/ProductHead"
import SimilarProduct from "./SimilarProduct/SimilarProduct"

export default function Product() {
	return (
		<>
			<Breadcrumb />
			<section className={classes.section}>
				<ProductHead />
				<ProductDetails />
				<SimilarProduct />
				<ProductComments />
			</section>
		</>
	)
}
