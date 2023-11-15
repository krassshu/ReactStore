import HomeC from "@/components/Home/Home"
import connectDB from "./Backend/mongoose"

const startServer = async () => {
	try {
		await connectDB()
		console.log("Connected to MongoDB")

		// Dodaj tutaj kod rozruchowy twojej aplikacji, jeśli to konieczne
	} catch (error: any) {
		console.error("Error connecting to MongoDB:", error.message)
	}
}

startServer()

export default function Home() {
	return <HomeC />
}
