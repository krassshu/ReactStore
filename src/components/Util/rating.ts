export function countRating(like: number, dislike: number) {
	if (typeof like !== "number" || typeof dislike !== "number") {
		throw new Error("Invalid input. Both like and dislike should be numbers.")
	}

	let rating = 0

	if (like + dislike > 0) {
		const percentage = (like / (like + dislike)) * 100
		rating = parseInt((percentage / 20).toFixed(1))
	}

	return rating
}
