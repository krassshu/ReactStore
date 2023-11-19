import classes from "./Head.module.css"

export interface AccountHead {
	title: string
	desc: string
}

export default function Notification(props: AccountHead) {
	return (
		<div className={classes.head}>
			<span>{props.title}</span>
			<p>{props.desc}</p>
		</div>
	)
}
