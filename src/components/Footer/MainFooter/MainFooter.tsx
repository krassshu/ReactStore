import Link from "next/link"
import classes from "./MainFooter.module.css"
import Image from "next/image"

import mailSvg from "@/assets/icons/sms-edit.svg"
import phoneSvg from "@/assets/icons/call-calling.svg"
import locationSvg from "@/assets/icons/location.svg"
import FooterNewsletter from "./FooterNewsletter/FooterNewsletter"

export default function MainFooter() {
	return (
		<div className={`${classes["main-footer"]} spacer`}>
			<div className={classes.info}>
				<p className={classes.title}>Company</p>
				<Link href={"#"}>About us</Link>
				<Link href={"#"}>Blog</Link>
				<Link href={"#"}>Returns</Link>
				<Link href={"#"}>Order status </Link>
			</div>
			<div className={classes.info}>
				<p className={classes.title}>Info</p>
				<Link href={"#"}>How it works?</Link>
				<Link href={"#"}>Our promises</Link>
				<Link href={"#"}>FAQ</Link>
			</div>
			<div className={classes.info}>
				<p className={classes.title}>Contact us</p>
				<a>
					<Image
						src={locationSvg}
						alt={"location icon"}
					/>{" "}
					123 Main Street, Anytown,USA
				</a>
				<a href="tel:+1 (555) 123-4567">
					<Image
						src={phoneSvg}
						alt={"phone icon"}
					/>{" "}
					+1 (555) 123-4567
				</a>
				<a href="mailto:TechHeimSupport@gmail.com">
					<Image
						src={mailSvg}
						alt={"mail icon"}
					/>{" "}
					TechHeimSupport@gmail.com
				</a>
			</div>
			<div className={`${classes.info} ${classes.news}`}>
				<FooterNewsletter />
			</div>

			<div className={classes.shadow}></div>
		</div>
	)
}
