"use client"

import React from "react"
import classes from "./SimilarProduct.module.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"
import Image from "next/image"
import arrowLeft from "@/assets/icons/arrow-circle-left.svg"
import arrowRight from "@/assets/icons/arrow-circle-right-full.svg"
import ProductsItem from "@/components/UI/ProductsItem/ProductsItem"

const SimilarProduct = () => {
	const sliderRef = useRef(null)

	const CustomPrevArrow = (props: any) => (
		<button
			onClick={props.onClick}
			className={`${classes.customPrevArrow} ${classes.arrow}`}
		>
			<Image
				src={arrowLeft}
				alt={"arrow left"}
			/>
		</button>
	)

	const CustomNextArrow = (props: any) => (
		<button
			onClick={props.onClick}
			className={`${classes.customNextArrow} ${classes.arrow}`}
		>
			<Image
				src={arrowRight}
				alt={"arrow right"}
			/>
		</button>
	)

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
	}

	return (
		<div className={classes.products}>
			<h4>Similar Products</h4>
			<div className={classes.slider}>
				<Slider
					{...settings}
					ref={sliderRef}
				>
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
				</Slider>
			</div>
		</div>
	)
}

export default SimilarProduct
