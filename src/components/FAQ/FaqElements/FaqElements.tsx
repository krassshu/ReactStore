import { useState } from "react"
import classes from "./FaqElements.module.css"

const faqArr = [
	{
		title: "Can I purchase products from Tech Heim using installment payments?",
		content:
			"Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget.        ",
	},
	{
		title: "Does Tech Heim offer a warranty on its products?",
		content:
			"Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information.",
	},
	{
		title: "How can I engage with the magazine content on Tech Heim?",
		content:
			"You can actively engage with the magazine content by leaving comments and participating in the question-and-answer section. Feel free to share your thoughts, ask questions, and interact with fellow tech enthusiasts in the community.",
	},
	{
		title: "Is Tech Heim a secure platform for online shopping?",
		content:
			"Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information.",
	},
	{
		title: "How can I get assistance with my purchase or any other inquiries?",
		content:
			"If you need assistance with your purchase or have any questions, our dedicated customer support team is here to help. You can reach out to us through the contact page on our website, and we'll be happy to assist you promptly.",
	},
]

export default function FaqElements() {
	const [isHide, setIsHide] = useState(Array(faqArr.length).fill(true))

	const onShowFaq = (index: number) => {
		const updatedIsHide = [...isHide]
		updatedIsHide[index] = !updatedIsHide[index]
		setIsHide(updatedIsHide)
	}

	return (
		<div className={classes.wrapper}>
			{faqArr.map((faq, i) => (
				<div
					key={i}
					className={classes.element}
				>
					<div
						className={classes["title-wrapper"]}
						tabIndex={0}
						onClick={() => onShowFaq(i)}
					>
						<span className={classes.title}>{faq.title}</span>
						<span style={isHide[i] ? { transform: "rotate(180deg)" } : {}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M19.9195 15.8001C19.7295 15.8001 19.5395 15.7301 19.3895 15.5801L12.8695 9.06008C12.3895 8.58008 11.6095 8.58008 11.1295 9.06008L4.60953 15.5801C4.31953 15.8701 3.83953 15.8701 3.54953 15.5801C3.25953 15.2901 3.25953 14.8101 3.54953 14.5201L10.0695 8.00008C11.1295 6.94008 12.8595 6.94008 13.9295 8.00008L20.4495 14.5201C20.7395 14.8101 20.7395 15.2901 20.4495 15.5801C20.2995 15.7201 20.1095 15.8001 19.9195 15.8001Z"
									fill="#0C68F4"
								/>
							</svg>
						</span>
					</div>
					<span
						className={`${classes.description} ${
							isHide[i] ? classes.hide : null
						}`}
					>
						{faq.content}
					</span>
				</div>
			))}
		</div>
	)
}
