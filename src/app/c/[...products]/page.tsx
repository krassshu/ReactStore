import Products from "@/components/Products/Products"

export default function FilteredProducts({ params, searchParams }: any) {
	return (
		<Products
			params={params}
			searchParams={searchParams}
		/>
	)
}
