import classes from "./HeaderProducts.module.css"

import HeaderCategory from "./HeaderCategory/HeaderCategory"
import HeaderCategoryPreview from "./HeaderCategoryPreview/HeaderCategoryPreview"

export default function HeaderProducts(props?: any) {
	return (
		<div className={`${classes.menu} spacer ${"classes." + props.classes}`}>
			<HeaderCategory />
			<HeaderCategoryPreview />
		</div>
	)
}
