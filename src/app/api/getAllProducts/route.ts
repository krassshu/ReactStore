import connectDB from "@/app/Backend/mongoose"

import ProductModel from "@/app/Backend/Models/productModel"

connectDB()

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const category = searchParams.get("category")
	console.log(category)
	try {
		if (category) {
			const products = await ProductModel.find({
				category: category.toLowerCase(),
			})
			return Response.json({ product: products })
		} else {
			const products = await ProductModel.find({})
			return Response.json({ product: products })
		}
	} catch (error: any) {
		console.error("Error fetching products:", error.message)
		return Response.json({ error: "Internal Server Error" }, { status: 500 })
	}
}
