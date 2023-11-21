import Container from "@/components/UI/Container/Container"
import classes from "./Notification.module.css"
import Head from "../Head/Head"
import NotificationCard, {
	NotificationCardT,
} from "./NotificationCard/NotificationCard"
import emailIcon from "@/assets/icons/direct.svg"
import deliveryIcon from "@/assets/icons/truck-gray.svg"
import pushIcon from "@/assets/icons/sms.svg"
import availibityIcon from "@/assets/icons/story.svg"

const notificationData: NotificationCardT[] = [
	{
		title: "Emails",
		description:
			"We write emails to let you know what's important, like: new order, confirmations ",
		icon: emailIcon,
	},
	{
		title: "Order Delivered",
		description: "You will be noticed once the order is delivered",
		icon: deliveryIcon,
	},
	{
		title: "Push to your Device",
		description:
			"Receive notifications about your order status, promotions and other updates",
		icon: pushIcon,
	},
	{
		title: "Product's availibilty",
		description: "You will be noticed when product gets available",
		icon: availibityIcon,
	},
]

export default function Notification() {
	return (
		<Container>
			<Head
				title={"Order History"}
				desc={"Track, return or purchase items"}
			/>
			<div className={classes.wrapper}>
				{notificationData.map((card, i) => (
					<NotificationCard
						key={i}
						title={card.title}
						description={card.description}
						icon={card.icon}
					/>
				))}
			</div>
		</Container>
	)
}
