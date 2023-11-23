"use client"

import React, { useEffect, useRef } from "react"
import ReactImageGallery from "react-image-gallery"
import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import classes from "./ProductGallery.module.css"
import { ProductContextProps, useProductContext } from "@/store/ProductContext"
import GallerySkeleton from "@/components/UI/Skeletons/GallerySkeleton"

interface Image {
	original: string
	thumbnail: string
}

const ProductGallery = () => {
	const imageGalleryRef = useRef<ReactImageGallery>(null)
	const { product, loading = true }: ProductContextProps = useProductContext()

	let images: Image[] = []

	if (!loading && product && product.imagePath) {
		images = product.imagePath.map((img) => ({
			original: img.image,
			thumbnail: img.image,
		}))
	}

	return (
		<div className={classes["gallery-wrapper"]}>
			{loading ? (
				<GallerySkeleton />
			) : (
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
			)}
		</div>
	)
}

export default ProductGallery
