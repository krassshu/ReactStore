type Register = {
	fullName: string
	email: string
	password: string
	policy: boolean
}

type Login = {
	email: string
	password: string
	keepLogin: boolean
}

type ProductItem = {
	_id?: string
	id: string
	imagePath: []
	productName: string
	price: number
	lastPrice: number
	rating: {
		like: number
		dislike: number
	}
}
