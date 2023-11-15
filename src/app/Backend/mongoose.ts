import mongoose from "mongoose"

const connectDB = async () => {
	try {
		const uri = process.env.DB_CLIENT

		if (!uri) {
			throw new Error("MongoDB URI is not defined")
		}

		await mongoose.connect(uri)
		console.log("Connected to MongoDB")
	} catch (error: any) {
		console.error("Error connecting to MongoDB:", error.message)
	}
}

export default connectDB
