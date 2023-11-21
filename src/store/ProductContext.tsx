import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react"
import axios from "axios"
import { Product } from "@/app/Backend/Models/productModel"

export interface ProductContextProps {
	product: Product | null
	loading: boolean
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined)

export const ProductProvider: React.FC<{
	productId: string
	children: ReactNode
}> = ({ productId, children }) => {
	const [product, setProduct] = useState<Product | null>(null)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					`/api/getSingleProduct/?productId=${productId}`
				)
				setProduct(res.data.product)
			} catch (error) {
				console.error("Error fetching product:", error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [productId])

	return (
		<ProductContext.Provider value={{ product, loading }}>
			{children}
		</ProductContext.Provider>
	)
}

export const useProductContext = () => {
	const context = useContext(ProductContext)
	if (!context) {
		throw new Error("useProductContext must be used within a ProductProvider")
	}
	return context
}
