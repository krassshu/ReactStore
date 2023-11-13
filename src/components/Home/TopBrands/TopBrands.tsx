import SectionHeader from "@/components/UI/SectionHeader/SectionHeader"
import classes from "./TopBrands.module.css"
import appleLogo from "@/assets/brands-logo/apple.svg"
import sonyLogo from "@/assets/brands-logo/sony.svg"
import samsungLogo from "@/assets/brands-logo/samsung.svg"
import canonLogo from "@/assets/brands-logo/canon.svg"
import huaweiLogo from "@/assets/brands-logo/huawei.svg"
import lenowoLogo from "@/assets/brands-logo/lenovo.svg"
import Image from "next/image"

export default function TopBrands() {
	return (
		<section>
			<SectionHeader
				title="Top Brands"
				url="sedf"
			/>
			<div className={classes.wrapper}>
				<Image
					src={appleLogo}
					alt=""
				/>
				<Image
					src={sonyLogo}
					alt=""
				/>
				<Image
					src={samsungLogo}
					alt=""
				/>
				<Image
					src={canonLogo}
					alt=""
				/>
				<Image
					src={huaweiLogo}
					alt=""
				/>
				<Image
					src={lenowoLogo}
					alt=""
				/>
			</div>
		</section>
	)
}
