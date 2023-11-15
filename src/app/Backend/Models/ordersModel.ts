import mongoose, { Schema, Document } from "mongoose"

interface OrderProduct {
	productId: string
}

interface Order extends Document {
	userId: string
	orderCode: string
	orderedProducts: OrderProduct[]
	orderStatus:
		| "order placed"
		| "processing"
		| "shipped"
		| "delivered"
		| "canceled"
	paymentStatus: "paid" | "unpaid"
	placedOn: Date
	sendAddress: string
	amountPaid: number
}

const orderSchema: Schema = new Schema({
	userId: { type: String, required: true },
	orderCode: { type: String, required: true },
	orderedProducts: [
		{
			productId: { type: String, required: true },
		},
	],
	orderStatus: {
		type: String,
		enum: ["order placed", "processing", "shipped", "delivered", "canceled"],
		default: "order placed",
	},
	paymentStatus: {
		type: String,
		enum: ["paid", "unpaid"],
		default: "unpaid",
	},
	placedOn: { type: Date, default: Date.now },
	sendAddress: { type: String, required: true },
	amountPaid: { type: Number, required: true },
})

const OrderModel = mongoose.model<Order>("Order", orderSchema)

export default OrderModel
