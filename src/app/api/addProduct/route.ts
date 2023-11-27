import connectDB from "../../Backend/mongoose"
import Product from "../../Backend/Models/productModel"

connectDB()

export async function POST(request: Request) {
	const data: Record<string, any> = {}

	const formData = await request.formData()
	formData.forEach((value, key) => {
		data[key] = value
	})

	try {
		data.colors = data.colors ? JSON.parse(data.colors) : []
		data.technicalDetails = data.technicalDetails
			? JSON.parse(data.technicalDetails)
			: []
		data.imageUrls = data.imageUrls ? JSON.parse(data.imageUrls) : []
	} catch (error) {
		return Response.json(
			{
				message: "Invalid JSON format in one of the fields",
			},
			{ status: 400 }
		)
	}

	const {
		productName,
		price,
		lastPrice,
		brand,
		stock,
		category,
		isDiscount,
		isNewProduct,
		colors,
		technicalDetails,
		imageUrls,
	} = data

	if (
		!productName ||
		!price ||
		!lastPrice ||
		!brand ||
		!stock ||
		!category ||
		!colors ||
		!technicalDetails ||
		!imageUrls
	) {
		return Response.json({ message: "Missing fields!" }, { status: 400 })
	}

	console.log(
		productName,
		price,
		lastPrice,
		brand,
		stock,
		category,
		isDiscount,
		isNewProduct,
		colors,
		technicalDetails,
		imageUrls
	)
	try {
		const newProduct = new Product({
			productName,
			price: Number(price),
			lastPrice: Number(lastPrice),
			brand,
			stock: Number(stock),
			category: category.toLowerCase(),
			isDiscount,
			isNewProduct,
			colors,
			technicalDetails,
			imagePath: imageUrls,
		})

		await newProduct.save()

		return Response.json(
			{ message: "Product added successfully", products: data },
			{ status: 200 }
		)
	} catch (error: any) {
		console.error(error)
		return Response.json({ message: "Internal Server Error" }, { status: 500 })
	}
}
