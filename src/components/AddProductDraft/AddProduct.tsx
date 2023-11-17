"use client"
import { Image } from "@/app/Backend/Models/productModel"
import axios from "axios"
import { useState } from "react"

export default function AddProduct() {
	const [productName, setProductName] = useState("")
	const [price, setPrice] = useState(0)
	const [lastPrice, setLastPrice] = useState(0)
	const [brand, setBrand] = useState("")
	const [stock, setStock] = useState(0)
	const [category, setCategory] = useState("")
	const [isDiscount, setIsDiscount] = useState(false)
	const [isNewProduct, setIsNewProduct] = useState(false)
	const [colors, setColors] = useState([{ name: "", hexCode: "" }])
	const [technicalDetails, setTechnicalDetails] = useState([
		{ key: "", value: "" },
	])
	const [images, setImages] = useState<File[]>([])
	const [loading, setLoading] = useState(false)

	const handleColorChange = (index: number, field: any, value: any) => {
		const newColors = colors.map((color, idx) =>
			idx === index ? { ...color, [field]: value } : color
		)
		setColors(newColors)
	}

	const handleTechnicalDetailsChange = (
		index: number,
		field: any,
		value: any
	) => {
		const newDetails = technicalDetails.map((detail, idx) =>
			idx === index ? { ...detail, [field]: value } : detail
		)
		setTechnicalDetails(newDetails)
	}

	const uploadImageToImgbb = async (imageFile: any) => {
		const formData = new FormData()
		formData.append("image", imageFile)

		const imgbbAPIKey = "830303b9d431ef94c5921a80bc8d0301"
		console.log(imgbbAPIKey)
		try {
			const response = await axios.post(
				`https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
				formData
			)
			const imageUrls: Image = {
				image: response.data.data.url,
				medium: response.data.data.medium.url,
				thumb: response.data.data.thumb.url,
			}
			return imageUrls
		} catch (error) {
			console.error("Błąd podczas przesyłania obrazu:", error)
			return null
		}
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault()
		setLoading(true)
		try {
			const imageUrls = await Promise.all(
				images.map((image) => uploadImageToImgbb(image))
			)
			console.log(imageUrls)
			if (!imageUrls) {
				console.error("nie wysłało sie")
				return
			}
			const formData = new FormData()
			formData.append("productName", productName)
			formData.append("price", String(price))
			formData.append("lastPrice", String(lastPrice))
			formData.append("brand", brand)
			formData.append("stock", String(stock))
			formData.append("category", category)
			formData.append("isDiscount", String(isDiscount))
			formData.append("isNewProduct", String(isNewProduct))
			formData.append("colors", JSON.stringify(colors))
			formData.append("technicalDetails", JSON.stringify(technicalDetails))
			formData.append(
				"imageUrls",
				JSON.stringify(imageUrls.filter((url) => url != null))
			)

			const response = await axios.post("/api/addProduct", formData)
			console.log(response.data)
		} catch (error) {
			console.error(error)
		}
		setLoading(false)
	}

	// Form layout
	return (
		<form
			onSubmit={handleSubmit}
			style={{ display: "flex", flexDirection: "column", gap: 12 }}
		>
			{/* Product Name */}
			<label>
				Product Name:
				<input
					type="text"
					value={productName}
					onChange={(e) => setProductName(e.target.value)}
				/>
			</label>

			{/* Price */}
			<label>
				Price:
				<input
					type="number"
					value={price}
					onChange={(e) => setPrice(parseInt(e.target.value))}
				/>
			</label>

			<label htmlFor="lastPrice">Ostatnia cena:</label>
			<input
				type="number"
				value={lastPrice}
				onChange={(e) => setLastPrice(parseInt(e.target.value))}
			/>

			<label htmlFor="brand">Marka:</label>
			<input
				type="text"
				value={brand}
				onChange={(e) => setBrand(e.target.value)}
			/>

			<label htmlFor="stock">Dostępność:</label>
			<input
				type="number"
				value={stock}
				onChange={(e) => setStock(parseInt(e.target.value))}
			/>

			<label htmlFor="category">Kategoria:</label>
			<input
				type="text"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
			/>

			{/* Checkboxes */}
			<label>
				<input
					type="checkbox"
					checked={isDiscount}
					onChange={(e) => setIsDiscount(e.target.checked)}
				/>
				Czy jest w promocji
			</label>

			<label>
				<input
					type="checkbox"
					checked={isNewProduct}
					onChange={(e) => setIsNewProduct(e.target.checked)}
				/>
				Czy jest nowym produktem
			</label>

			{/* Colors */}
			{colors.map((color, index) => (
				<div key={index}>
					<input
						type="text"
						value={color.name}
						onChange={(e) => {
							let newColors = [...colors]
							newColors[index].name = e.target.value
							setColors(newColors)
						}}
					/>
					<input
						type="text"
						value={color.hexCode}
						onChange={(e) => {
							let newColors = [...colors]
							newColors[index].hexCode = e.target.value
							setColors(newColors)
						}}
					/>
				</div>
			))}
			<button
				type="button"
				onClick={() => setColors([...colors, { name: "", hexCode: "" }])}
			>
				Add Color
			</button>

			{/* Technical Details */}
			{technicalDetails.map((detail, index) => (
				<div key={index}>
					<input
						type="text"
						value={detail.key}
						onChange={(e) => {
							let newDetails = [...technicalDetails]
							newDetails[index].key = e.target.value
							setTechnicalDetails(newDetails)
						}}
					/>
					<input
						type="text"
						value={detail.value}
						onChange={(e) => {
							let newDetails = [...technicalDetails]
							newDetails[index].value = e.target.value
							setTechnicalDetails(newDetails)
						}}
					/>
				</div>
			))}
			<button
				type="button"
				onClick={() =>
					setTechnicalDetails([...technicalDetails, { key: "", value: "" }])
				}
			>
				Add Detail
			</button>

			{/* Images */}
			<input
				type="file"
				onChange={(e) => {
					if (e.target.files) {
						setImages(Array.from(e.target.files))
					}
				}}
			/>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={loading}
			>
				{loading ? "Adding..." : "Add Product"}
			</button>
		</form>
	)
}
