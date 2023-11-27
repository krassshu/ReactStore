import ProductC from "@/components/Product/Product"

export default function Product({ params }: { params: { productId: string } }) {
	return <ProductC productId={params.productId} />
}
