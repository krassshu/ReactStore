const countProductOccurrences = (
	products: ProductToBag[],
	productId: string
): number => {
	return products.reduce((count, product) => {
		return product.id === productId ? count + 1 : count
	}, 0)
}

export default countProductOccurrences
