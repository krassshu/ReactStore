import ProductModel from "@/app/Backend/Models/productModel"
import connectDB from "@/app/Backend/mongoose"

connectDB()

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const productId = searchParams.get("productId")
	try {
		const product = await ProductModel.findOne({ _id: productId })
		return Response.json({ product: product }, { status: 200 })
	} catch (error: any) {
		console.log(error)
		return Response.json(
			{ message: "Error occurred during fetching product data" },
			{ status: 500 }
		)
	}
}
