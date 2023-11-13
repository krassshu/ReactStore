import classes from "./Header.module.css"
import logoImg from "../../assets/logo.png"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
	return (
		<header className={classes.header}>
			<div className={classes.container + " spacer"}>
				<Link
					className={classes.logo}
					href="/"
				>
					<Image
						src={logoImg}
						alt="Tech logo"
					/>
				</Link>
				<nav className={classes.nav}>
					<ul className={classes["nav-items"]}>
						<li className={classes["nav-item"]}>
							<Link href="/">Home</Link>
						</li>
						<li className={classes["nav-item"]}>
							<Link href="/products">Products</Link>
						</li>
						<li className={classes["nav-item"]}>
							<p>Blog</p>
						</li>
						<li className={classes["nav-item"]}>
							<Link href="/FAQ">FAQ</Link>
						</li>
						<li className={classes["nav-item"]}>
							<p>Contact Us</p>
						</li>
					</ul>
				</nav>
				<ul className={classes["header-tools"]}>
					<li className={classes["header-tool"]}>
						<button className={classes.search}></button>
					</li>
					<li className={classes["header-tool"]}>
						<button className={classes.basket}></button>
					</li>
					<li className={classes["header-tool"]}>
						<button className={classes.user}></button>
					</li>
				</ul>
			</div>
		</header>
	)
}
