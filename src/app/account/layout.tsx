import Breadcrumb from "@/components/UI/Breadcrumb/Breadcrumb"
import classes from "./page.module.css"
import AsideNav from "@/components/Account/AsideNav/AsideNav"

export default function Orders({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Breadcrumb />
			<section className={classes.wrapper}>
				<AsideNav />
				{children}
			</section>
		</>
	)
}
