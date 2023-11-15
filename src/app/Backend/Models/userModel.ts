import mongoose, { Document, Schema, Types } from "mongoose"

interface Personal {
	fullName?: string
	phone?: string
	address?: string
	postalCode?: string
}

interface PrivacyTerms {
	cookie: boolean
	privacyPolicy: boolean
}

interface Notification {
	emails: boolean
	orderDelivery: boolean
	pushDevice: boolean
	productAvailability: boolean
}

interface User extends Document {
	username: string
	email: string
	password: string
	personals?: Personal
	bag: { productId: Types.ObjectId }[]
	orders: { orderId: Types.ObjectId }[]
	wishList: { productId: Types.ObjectId }[]
	privacyTerms: PrivacyTerms
	notification: Notification
}

const userSchema: Schema = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	personals: {
		fullName: String,
		phone: String,
		address: String,
		postalCode: String,
	},
	bag: [
		{
			productId: { type: Types.ObjectId },
		},
	],
	orders: [
		{
			orderId: { type: Types.ObjectId },
		},
	],
	wishList: [{ productId: { type: Types.ObjectId } }],
	privacyTerms: {
		cookie: { type: Boolean, default: false },
		privacyPolicy: { type: Boolean, default: false },
	},
	notification: {
		emails: { type: Boolean, default: false },
		orderDelivery: { type: Boolean, default: false },
		pushDevice: { type: Boolean, default: false },
		productAvailability: { type: Boolean, default: false },
	},
})

const UserModel = mongoose.model<User>("User", userSchema)

export default UserModel
