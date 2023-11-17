import User from "@/app/Backend/Models/userModel"
import connectDB from "@/app/Backend/mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { serialize } from "cookie"

connectDB()

export async function POST(req: Request) {
	const { email, password, keepLogin }: Partial<Login> = await req.json()

	try {
		if (!email || !password) {
			return Response.json(
				{ message: "Missing required fields." },
				{ status: 404 }
			)
		}

		const user = await User.findOne({ email: email })

		let expireSeconds: number | undefined = undefined

		if (keepLogin) {
			expireSeconds = 10 * 365 * 24 * 60 * 60
		} else {
			expireSeconds = 24 * 60 * 60
		}

		if (!user) {
			return Response.json(
				{ message: "This user does not exist." },
				{ status: 404 }
			)
		}

		const validPassword = await bcrypt.compare(password, user.password)

		if (!validPassword) {
			return Response.json({ message: "Invalid password." }, { status: 400 })
		}

		const secret = process.env.JWT_SECRET_KEY

		if (!secret) {
			throw new Error("JWT_SECRET_KEY is not defined in environment variables.")
		}

		const token = jwt.sign(
			{
				_id: user.id,
				email: user.email,
			},
			secret,
			{
				algorithm: "HS256",
				expiresIn: expireSeconds,
			}
		)

		const cookieOptions = {
			httpOnly: true,
			maxAge: expireSeconds,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict" as const,
			path: "/",
		}

		const cookieValue = serialize("at_user", token, cookieOptions)

		return Response.json(
			{ message: "Login successful" },
			{ status: 201, headers: { "Set-Cookie": cookieValue } }
		)
	} catch (error: any) {
		console.error("Error occurred during login:", error)
		return Response.json(
			{
				error: "Error occurred during login:",
				message: error.message,
			},
			{ status: 500 }
		)
	}
}
