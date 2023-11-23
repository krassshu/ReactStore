import connectDB from "@/app/Backend/mongoose"

import ProductModel from "@/app/Backend/Models/productModel"

connectDB()

export async function GET() {
	let products
	try {
		products = await ProductModel.find({})

		return Response.json({ product: products })
	} catch (error: any) {
		console.error("Error fetching products:", error.message)
		return Response.json({ error: "Internal Server Error" }, { status: 500 })
	}
}
