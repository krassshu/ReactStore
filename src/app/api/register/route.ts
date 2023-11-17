import connectDB from "../../Backend/mongoose"
import UserModel from "@/app/Backend/Models/userModel"
import bcrypt from "bcrypt"

connectDB()

export async function POST(req: Request) {
	try {
		const { fullName, email, password, policy }: Partial<Register> =
			await req.json()

		if (!fullName || !email || !password || !policy) {
			return Response.json(
				{ message: "Missing required fields." },
				{ status: 400 }
			)
		}

		const existingUser = await UserModel.findOne({ email: email })

		if (existingUser) {
			return Response.json(
				{ message: "Email already in use." },
				{ status: 400 }
			)
		}

		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = new UserModel({
			fullName,
			email,
			password: hashedPassword,
			privacyTerms: policy,
		})

		await newUser.save()

		return Response.json(
			{ message: "Registration successful" },
			{ status: 200 }
		)
	} catch (error: any) {
		console.log(error)
		return Response.json(
			{ error: "Error occurred during registration:", message: error.message },
			{ status: 500 }
		)
	}
}
