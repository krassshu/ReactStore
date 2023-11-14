"use client"

import React, { useRef } from "react"
import ReactImageGallery from "react-image-gallery"
import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import classes from "./ProductGallery.module.css"

const images = [
	{
		original: "https://picsum.photos/id/1018/1000/600/",
		thumbnail: "https://picsum.photos/id/1018/250/150/",
	},
	{
		original: "https://picsum.photos/id/1015/1000/600/",
		thumbnail: "https://picsum.photos/id/1015/250/150/",
	},
	{
		original: "https://picsum.photos/id/1019/1000/600/",
		thumbnail: "https://picsum.photos/id/1019/250/150/",
	},
]

interface ProductGalleryProps extends ReactImageGalleryProps {}

const ProductGallery: React.FC<ProductGalleryProps> = (props) => {
	const imageGalleryRef = useRef<ReactImageGallery>(null)

	return (
		<div className={classes["gallery-wrapper"]}>
			<ImageGallery
				ref={imageGalleryRef}
				items={images}
				lazyLoad={true}
				infinite={true}
				showNav={false}
				showPlayButton={false}
				autoPlay={false}
				disableSwipe={false}
			/>
		</div>
	)
}

export default ProductGallery
