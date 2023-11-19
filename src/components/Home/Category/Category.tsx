import classes from "./Category.module.css"
import CategoryItem from "./CategoryItem/CategoryItem"
import accessoriesImg from "@/assets/category/accessories.png"
import cameraImg from "@/assets/category/camera.png"
import laptopImg from "@/assets/category/laptop.png"
import phoneImg from "@/assets/category/smart-phone.png"
import gamingImg from "@/assets/category/gaming.png"
import watchImg from "@/assets/category/smart-watch.png"

export default function Category() {
	const category = [
		{ category: "Accessories", imgPath: accessoriesImg },
		{ category: "Camera", imgPath: cameraImg },
		{ category: "Laptop", imgPath: laptopImg },
		{ category: "Smart Phone", imgPath: phoneImg },
		{ category: "Gaming", imgPath: gamingImg },
		{ category: "Smart Watch", imgPath: watchImg },
	]

	return (
		<section className={classes.wrapper}>
			{category.map((data, i) => (
				<CategoryItem
					key={i}
					category={data.category}
					path={data.imgPath}
				/>
			))}
		</section>
	)
}
