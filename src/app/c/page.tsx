import { redirect } from "next/navigation"

export default async function Products({ searchParams }: any) {
	redirect("/c/products")
}
