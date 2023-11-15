import mongoose, { Schema, Document, Types } from "mongoose"

interface Rating {
	like: number
	dislike: number
}

interface Comment {
	userId: Types.ObjectId
	publicationDate: Date
	comment: string
	commentRating: Rating
}

interface Color {
	name: string
	hexCode: string
}

interface TechnicalDetail {
	key: string
	value: string
}

interface Product extends Document {
	productName: string
	price: number
	lastPrice: number
	brand: string
	sold: number
	stock: number
	category: string
	rating: Rating
	colors: Color[]
	imagePath: string[]
	technicalDetails: TechnicalDetail[]
	comments: Comment[]
	isDiscount: boolean
	isNewProduct: boolean
}

const productSchema: Schema = new Schema({
	productName: { type: String, required: true },
	price: { type: Number, required: true },
	lastPrice: { type: Number, required: true },
	brand: { type: String, required: true },
	sold: { type: Number, default: 0 },
	stock: { type: Number, required: true },
	category: { type: String, required: true },
	rating: {
		like: { type: Number, default: 0 },
		dislike: { type: Number, default: 0 },
	},
	colors: [
		{
			name: { type: String, required: true },
			hexCode: { type: String, required: true },
		},
	],
	imagePath: [String],
	technicalDetails: [
		{
			key: { type: String, required: true },
			value: { type: String, required: true },
		},
	],
	comments: [
		{
			userId: { type: Types.ObjectId, required: true },
			publicationDate: { type: Date, default: Date.now },
			comment: { type: String, required: true },
			commentRating: {
				like: { type: Number, default: 0 },
				dislike: { type: Number, default: 0 },
			},
		},
	],
	isDiscount: { type: Boolean, default: false },
	isNewProduct: { type: Boolean, default: true },
})

const ProductModel = mongoose.model<Product>("Product", productSchema)

export default ProductModel
