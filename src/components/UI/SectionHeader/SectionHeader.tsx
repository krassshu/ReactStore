import classes from "./SectionHeader.module.css"


export interface SectionHeaderData {
	title: string
	url: string
}

export default function SectionHeader(props: SectionHeaderData) {
	return (
		<div className={classes.header}>
			<h3>{props.title}</h3>
			<a>View all {" >"}</a>
		</div>
	)
}
