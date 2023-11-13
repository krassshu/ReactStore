import classes from "@/components/Home/Home.module.css"
import laptopsImg from "@/assets/laptops.png"
import Category from "@/components/Home/Category/Category"
import OnSale from "@/components/Home/OnSale/OnSale"
import NewProducts from "@/components/Home/NewProducts/NewProducts"
import Promotion from "@/components/Home/Promotion/Promotion"
import BestSellers from "@/components/Home/BestSellers/BestSellers"
import TopBrands from "@/components/Home/TopBrands/TopBrands"
import PromoBaner from "@/components/Home/PromoBaner/PromoBaner"
import OurServices from "@/components/OurServices/OurServices"
import Image from "next/image"

export default function Home() {
	return (
		<>
			<section className={classes.container}>
				<div className={classes.frame}>
					<div className={classes["text-wrapper"]}>
						<h1 className={`display-1`}>Tech Heim</h1>
						<h3>"Join the digital revolution"</h3>
					</div>
					<button className={classes.button}>Explore more</button>
				</div>
				<div className={classes.frame}>
					<Image
						src={laptopsImg}
						alt="Huawei laptops"
					/>
				</div>
			</section>
			<Category />
			<OnSale />
			<NewProducts />
			<Promotion />
			<BestSellers />
			<TopBrands />
			<PromoBaner />
			<OurServices />
		</>
	)
}
