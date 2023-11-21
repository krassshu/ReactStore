import { TechnicalDetail } from "@/app/Backend/Models/productModel"
import classes from "./MoreProductInfo.module.css"

export default function MoreProductInfo({
	techDetails,
}: {
	techDetails: TechnicalDetail[]
}) {
	return (
		<div className={classes.wrapper}>
			<ul>
				{techDetails.map((detail, i) => (
					<li className={classes.item}>
						<p>
							{detail.key}
							<span> {detail.value}</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}
